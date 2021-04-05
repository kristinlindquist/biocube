import React, { ReactElement, ReactNode } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { ChartType, useCubeQuery } from '@cubejs-client/react';
import { CubejsApi, Query } from '@cubejs-client/core';
import moment from 'moment';
import numeral from 'numeral';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  Cell,
  Legend,
  LineChart,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const numberFormatter = (item) => numeral(item).format('0,0');
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
  /**
   * children
   */
  children?: (ReactNode | ReactElement)[];
  /**
   * chart component
   */
  // eslint-disable-next-line
  ChartComponent?: any;
  /**
   * chart height
   */
  height?: number;
  /**
   * where to place legend
   */
  legendLayout?: LayoutType;
  /**
   * resultSet
   */
  resultSet: ResultSet<string>;
}

const defaultHeight = 300;

const CartesianChart = ({
  children,
  ChartComponent,
  height = defaultHeight,
  resultSet,
  legendLayout,
}: ChartProps) => (
  <ResponsiveContainer width="100%" height={height}>
    <ChartComponent
      data={resultSet.chartPivot()}
      margin={{
        top: 16,
        right: 16,
        bottom: 0,
        left: 16,
      }}>
      <XAxis
        axisLine={false}
        dataKey="x"
        minTickGap={20}
        tickLine={false}
        tickFormatter={xAxisFormatter}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tickFormatter={numberFormatter}
      />
      <CartesianGrid vertical={false} />
      {children}
      {legendLayout && <Legend />}
      <Tooltip labelFormatter={dateFormatter} formatter={numberFormatter} />
    </ChartComponent>
  </ResponsiveContainer>
);

const getColors = (theme: Theme): Array<string> =>
  theme
    ? [
        theme.palette.teal.main,
        theme.palette.indigo.main,
        theme.palette.blue.main,
        theme.palette.purple.main,
        theme.palette.green.main,
        theme.palette.grey['500'],
        theme.palette.red.main,
      ]
    : [];

const TypeToChartComponent = {
  area: ({ resultSet }: ChartProps) => {
    const theme = useTheme();
    const colors = getColors(theme);

    return (
      <CartesianChart resultSet={resultSet} ChartComponent={AreaChart}>
        {resultSet.seriesNames().map(({ key, title }, i) => (
          <Area
            dataKey={key}
            fill={colors[i]}
            key={key}
            name={title}
            stroke={colors[i]}
          />
        ))}
      </CartesianChart>
    );
  },
  bar: ({ resultSet }: ChartProps) => {
    const theme = useTheme();
    const colors = getColors(theme);

    return (
      <CartesianChart ChartComponent={BarChart} resultSet={resultSet}>
        {resultSet.seriesNames().map(({ key, title }, i) => (
          <Bar dataKey={key} fill={colors[i]} key={key} name={title} />
        ))}
      </CartesianChart>
    );
  },
  line: ({ resultSet, ...props }: ChartProps) => {
    const theme = useTheme();
    const colors = getColors(theme);

    return (
      <CartesianChart
        {...props}
        ChartComponent={LineChart}
        resultSet={resultSet}>
        {resultSet.seriesNames().map(({ key, title }, i) => (
          <Line
            connectNulls
            dataKey={key}
            key={key}
            name={title}
            stroke={colors[i]}
            strokeWidth={1.5}
            type="linear"
          />
        ))}
      </CartesianChart>
    );
  },
  pie: ({ resultSet, legendLayout, height }: ChartProps) => {
    const theme = useTheme();
    const colors = getColors(theme);

    return (
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={resultSet.chartPivot()}
            dataKey={resultSet.seriesNames()[0].key}
            label={(value) => numeral(value.percent).format('0.00%')}
            nameKey="x">
            {resultSet.chartPivot().map((e, index) => (
              <Cell key={e} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          {legendLayout && <Legend layout={legendLayout} align="right" />}
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  table: ({ resultSet }: ChartProps) => (
    <Table aria-label="table" size="small">
      <TableHead>
        <TableRow>
          {resultSet.tableColumns().map(({ key, shortTitle }) => (
            <TableCell
              align={getType(resultSet, key) === 'number' ? 'right' : 'left'}
              key={`header-${key}`}>
              {shortTitle}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {resultSet.tablePivot().map((row) => (
          <TableRow key={Object.values(row)[0] as string}>
            {resultSet.tableColumns().map(({ key }) => (
              <TableCell
                align={getType(resultSet, key) === 'number' ? 'right' : 'left'}
                key={key}>
                {resolveFormatter(getType(resultSet, key))(row[key])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

const TypeToMemoChartComponent = Object.keys(TypeToChartComponent)
  .map((key) => ({
    [key]: React.memo(TypeToChartComponent[key]),
  }))
  .reduce((a, b) => ({ ...a, ...b }));

const renderChart = (Component) => ({
  resultSet,
  error,
  height = defaultHeight,
  ...props
}: {
  resultSet: ResultSet<{ [key: string]: string | number | boolean }>;
  error?: Error;
  height: number;
}) =>
  (resultSet && (
    <Component height={height} resultSet={resultSet} {...props} />
  )) ||
  (error && <span>{error.toString()}</span>) || (
    <Skeleton height={height} variant="rectangular" />
  );

export interface ChartRendererProps {
  /**
   * cube API
   */
  cubejsApi?: CubejsApi;
  /**
   * chart height
   */
  height?: number;
  /**
   * viz state
   */
  vizState: {
    query: Query | Query[];
    chartType: ChartType;
  };
}

const ChartRenderer = ({
  vizState,
  height,
}: ChartRendererProps): ReactElement => {
  const { query, chartType, ...options } = vizState;
  const component = TypeToMemoChartComponent[chartType];
  const renderProps = useCubeQuery(query);

  return component ? (
    renderChart(component)({ height, ...options, ...renderProps })
  ) : (
    <span />
  );
};

export default ChartRenderer;
