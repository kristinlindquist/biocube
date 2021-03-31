import React, { ReactElement } from 'react';
import { useCubeQuery } from '@cubejs-client/react';

import {
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
} from 'recharts';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

import moment from 'moment';
import numeral from 'numeral';

import { JSONObject } from 'types';

const numberFormatter = (item) => numeral(item).format('0,0');
const decimalFormatter = (item) => numeral(item).format('0,0.00');
const percentFormatter = (item) => numeral(item / 100.0).format('0.00%');
const timeNumberFormatter = (item) => numeral(item).format('00:00:00');
const dateFormatter = (item) => moment(item).format('MMM DD');
const resolveFormatter = (type) => {
  switch (type) {
    case 'number':
      return numberFormatter;
    default:
      return (item) => item;
  }
};

const xAxisFormatter = (item) =>
  moment(item).isValid() ? dateFormatter(item) : item;

const getType = (resultSet, key) =>
  (
    resultSet.loadResponse.annotation.measures[key] ||
    resultSet.loadResponse.annotation.dimensions[key]
  ).type;

export interface ChartProps {
  /**
   * resultSet
   */
  resultSet: {
    [key: string]: any;
    chartPivot: any;
  };
  legend?: any;
  height?: number;
  children?: any;
  ChartComponent?: any;
}

const CartesianChart = ({
  resultSet,
  legend,
  children,
  ChartComponent,
  height = 250,
}: ChartProps) => (
  <ResponsiveContainer width="100%" height={height}>
    <ChartComponent
      margin={{
        top: 16,
        right: 16,
        bottom: 0,
        left: 0,
      }}
      data={resultSet.chartPivot()}>
      <XAxis
        axisLine={false}
        tickLine={false}
        tickFormatter={xAxisFormatter}
        dataKey="x"
        minTickGap={20}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tickFormatter={numberFormatter}
      />
      <CartesianGrid vertical={false} />
      {children}
      {legend && <Legend />}
      <Tooltip labelFormatter={dateFormatter} formatter={numberFormatter} />
    </ChartComponent>
  </ResponsiveContainer>
);

CartesianChart.defaultProps = {
  legend: true,
};

const colors = ['#4791db', '#e33371', '#e57373'];

const durationMeasures = [
  'PageViews.averageTimeOnPageSeconds',
  'Sessions.averageDurationSeconds',
];

// const stackedChartData = (resultSet) => {
//   const data = resultSet
//     .pivot()
//     .map(({ xValues, yValuesArray }) =>
//       yValuesArray.map(([yValues, m]) => ({
//         x: resultSet.axisValuesString(xValues, ', '),
//         color: resultSet.axisValuesString(yValues, ', '),
//         measure: m && Number.parseFloat(m),
//       })),
//     )
//     .reduce((a, b) => a.concat(b), []);
//   return data;
// };

const TypeToChartComponent = {
  line: ({ resultSet, ...props }: ChartProps) => (
    <CartesianChart resultSet={resultSet} ChartComponent={LineChart} {...props}>
      {resultSet.seriesNames().map((series, i) => (
        <Line
          key={series.key}
          // stackId="a"
          dataKey={series.key}
          name={series.title}
          stroke={colors[i]}
        />
      ))}
    </CartesianChart>
  ),
  bar: ({ resultSet }: ChartProps) => (
    <CartesianChart resultSet={resultSet} ChartComponent={BarChart}>
      {resultSet.seriesNames().map((series, i) => (
        <Bar
          key={series.key}
          stackId="a"
          dataKey={series.key}
          name={series.title}
          fill={colors[i]}
        />
      ))}
    </CartesianChart>
  ),
  area: ({ resultSet }: ChartProps) => (
    <CartesianChart resultSet={resultSet} ChartComponent={AreaChart}>
      {resultSet.seriesNames().map((series, i) => (
        <Area
          key={series.key}
          stackId="a"
          dataKey={series.key}
          name={series.title}
          stroke={colors[i]}
          fill={colors[i]}
        />
      ))}
    </CartesianChart>
  ),
  pie: ({ resultSet, legend, height }: ChartProps) => (
    <ResponsiveContainer width="100%" height={height || 250}>
      <PieChart>
        <Pie
          label={(value) => numeral(value.percent).format('0.00%')}
          isAnimationActive={false}
          data={resultSet.chartPivot()}
          nameKey="x"
          dataKey={resultSet.seriesNames()[0].key}
          fill="#8884d8">
          {resultSet.chartPivot().map((e, index) => (
            <Cell key={e} fill={colors[index % colors.length]} /> // idx
          ))}
        </Pie>
        {legend && <Legend layout={legend} align="right" />}
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  ),
  number: ({ resultSet, height }: ChartProps) => {
    const measureKey = resultSet.seriesNames()[0].key; // Ensure number can only render single measure
    const { format } = resultSet.loadResponse.annotation.measures[measureKey];
    const value = resultSet.totalRow()[measureKey];
    let formattedValue;
    if (format === 'percent') {
      formattedValue = percentFormatter(value);
    } else if (durationMeasures.includes(measureKey)) {
      // special case, since format time is missing
      formattedValue = timeNumberFormatter(value);
    } else if (Math.ceil(value) === value && Math.floor(value) === value) {
      formattedValue = numberFormatter(value);
    } else {
      formattedValue = decimalFormatter(value);
    }
    return (
      <Typography component="p" variant="h4" style={{ height }}>
        {formattedValue}
      </Typography>
    );
  },
  table: ({ resultSet }: ChartProps) => (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {resultSet.tableColumns().map((c) => (
              <TableCell
                align={
                  getType(resultSet, c.key) === 'number' ? 'right' : 'left'
                }
                key={c.key}>
                {c.shortTitle}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {resultSet.tablePivot().map((row) => (
            <TableRow key={row.id}>
              {resultSet.tableColumns().map((c) => {
                const type = getType(resultSet, c.key);
                return (
                  <TableCell
                    align={
                      getType(resultSet, c.key) === 'number' ? 'right' : 'left'
                    }
                    key={c.key}>
                    {resolveFormatter(type)(row[c.key])}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ),
};
const TypeToMemoChartComponent = Object.keys(TypeToChartComponent)
  .map((key) => ({
    [key]: React.memo(TypeToChartComponent[key]),
  }))
  .reduce((a, b) => ({ ...a, ...b }));

const Loader = ({ height }: { height?: number }): ReactElement => {
  const skeletons = [];
  for (let i = 0; i < height; i += 18) {
    skeletons.push(<Skeleton key={i} />);
  }
  return <div style={{ height }}>{skeletons}</div>;
};

const renderChart = (Component) => ({
  resultSet,
  error,
  height,
  ...props
}: {
  resultSet: any;
  error?: any;
  height?: number;
}) =>
  (resultSet && (
    <Component resultSet={resultSet} height={height} {...props} />
  )) ||
  (error && error.toString()) || <Loader height={height} />;

export interface ChartRendererProps {
  /**
   * viz state, whatever that is
   */
  vizState: {
    query: any;
    chartType: any;
  };
  /**
   * cube API
   */
  cubejsApi?: JSONObject;
  height?: number;
}

const ChartRenderer = ({
  vizState,
  height,
}: ChartRendererProps): ReactElement => {
  const { query, chartType, ...options } = vizState;
  const component = TypeToMemoChartComponent[chartType];
  const renderProps = useCubeQuery(query);
  return component ? (
    renderChart(component)({ ...options, height, ...renderProps })
  ) : (
    <span />
  );
};

export default ChartRenderer;
