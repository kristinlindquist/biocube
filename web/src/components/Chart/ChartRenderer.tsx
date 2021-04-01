import React, { ReactElement, ReactNode } from 'react';
import { ChartType, useCubeQuery } from '@cubejs-client/react';
import { CubejsApi, Query } from '@cubejs-client/core';

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  LineChart,
  Line,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
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

type ResultSet<Type> = {
  chartPivot: () => Array<Type>;
  loadResponse?: {
    results: Array<{
      annotation: { measures: Array<{ [key: string]: string }> };
    }>;
  };
  seriesNames: () => Array<{ key: string; title: string }>;
  tableColumns: () => Array<{ key: string; shortTitle: string }>;
  tablePivot: () => Array<{
    id?: string;
    [key: string]: string | number | boolean;
  }>;
  totalRow: () => { x: string; xValues: string[] };
};

const getType = (resultSet, key) =>
  (
    resultSet.loadResponse.results[0].annotation.measures[key] ||
    resultSet.loadResponse.results[0].annotation.dimensions[key] ||
    {}
  ).type;

export type LayoutType = 'horizontal' | 'vertical' | 'centric' | 'radial';

export interface ChartProps {
  children?: (ReactNode | ReactElement)[];
  // eslint-disable-next-line
  ChartComponent?: any;
  height?: number;
  legend?: LayoutType;
  /**
   * resultSet
   */
  resultSet: ResultSet<string>;
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

const colors = ['#4791db', '#e33371', '#e57373'];

const durationMeasures = [
  'PageViews.averageTimeOnPageSeconds',
  'Sessions.averageDurationSeconds',
];

const TypeToChartComponent = {
  line: ({ resultSet, ...props }: ChartProps) => (
    <CartesianChart resultSet={resultSet} ChartComponent={LineChart} {...props}>
      {resultSet.seriesNames().map((series, i) => (
        <Line
          key={series.key}
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
    const { format } = resultSet.loadResponse.results[0].annotation.measures[
      measureKey
    ];
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
            {resultSet.tableColumns().map(({ key, shortTitle }) => (
              <TableCell
                align={getType(resultSet, key) === 'number' ? 'right' : 'left'}
                key={key}>
                {shortTitle}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {resultSet.tablePivot().map((row) => (
            <TableRow key={row.id}>
              {resultSet.tableColumns().map(({ key }) => {
                const type = getType(resultSet, key);
                return (
                  <TableCell
                    align={
                      getType(resultSet, key) === 'number' ? 'right' : 'left'
                    }
                    key={key}>
                    {resolveFormatter(type)(row[key])}
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
  resultSet: ResultSet<{ [key: string]: string | number | boolean }>;
  error?: Error;
  height?: number;
}) =>
  (resultSet && (
    <Component height={height} resultSet={resultSet} {...props} />
  )) ||
  (error && <span>{error.toString()}</span>) || <Loader height={height} />;

export interface ChartRendererProps {
  /**
   * viz state, whatever that is
   */
  vizState: {
    query: Query | Query[];
    chartType: ChartType;
  };
  /**
   * cube API
   */
  cubejsApi?: CubejsApi;
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
