import React, { ReactElement, ReactNode } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { ChartType, useCubeQuery } from '@cubejs-client/react';
import { CubejsApi, Query } from '@cubejs-client/core';
import moment from 'moment';
import numeral from 'numeral';
import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
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
import { get, isEmpty } from 'lodash';

import { Card } from 'components/Card';
import SelectChartType from '../QueryBuilder/SelectChartType';
import { zeroToNull } from './utils';

const numberFormatter = (item) => numeral(item).format('0,0');
const dateFormatter = (item) => moment(item).format('MMM DD');
const resolveFormatter = (type) => {
  const formatters = {
    number: numberFormatter,
  };
  return formatters[type] || ((item) => item);
};

const xAxisFormatter = (item) =>
  moment(item).isValid() ? dateFormatter(item) : item;

type ResultSet<Type> = {
  chartPivot: (any?) => Array<Type>;
  loadResponse?: {
    results: Array<{
      annotation: { measures: Array<{ [key: string]: string }> };
    }>;
  };
  seriesNames: () => Array<{ key: string; shortTitle: string }>;
  tableColumns: () => Array<{ key: string; shortTitle: string }>;
  tablePivot: () => Array<{
    id?: string;
    [key: string]: string | number | boolean;
  }>;
  totalRow: () => { x: string; xValues: string[] };
};

const annotationBase = 'loadResponse.results[0].annotation';

/**
 * default chart type from meta on cubejs
 */
const getChartType = (resultSet, key) => {
  const measures = get(resultSet, `${annotationBase}.measures`);
  const ct = get(measures[key], 'meta.chartType');
  return ct ? ct.toLowerCase() : 'line';
};

const getType = (resultSet, key) =>
  (
    get(resultSet, `${annotationBase}.measures.${key}`) ||
    get(resultSet, `${annotationBase}.dimensions.${key}`) ||
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

const axisProps = {
  axisLine: false,
  tickLine: false,
};

/**
 * Chart with axes, grid and legend
 */
const CartesianChart = ({
  children,
  ChartComponent,
  height = defaultHeight,
  resultSet,
  legendLayout,
}: ChartProps) => (
  <ResponsiveContainer width="100%" height={height}>
    <ChartComponent
      data={zeroToNull(resultSet.chartPivot())}
      margin={{
        top: 16,
        right: 32,
        bottom: 0,
        left: 16,
      }}>
      <XAxis
        {...axisProps}
        dataKey="x"
        minTickGap={20}
        tickFormatter={xAxisFormatter}
      />
      <YAxis {...axisProps} tickFormatter={numberFormatter} yAxisId="left" />
      <YAxis
        {...axisProps}
        tickFormatter={numberFormatter}
        yAxisId="right"
        orientation="right"
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

const getSubChart = ({
  color,
  key,
  name,
  type,
  yAxisId,
}: {
  color: string;
  key: string;
  name: string;
  type: string;
  yAxisId: string;
}) => {
  const props = {
    dataKey: key,
    key,
    name,
    yAxisId,
  };
  const LineType = (
    <Line {...props} connectNulls stroke={color} strokeWidth={1.5} />
  );
  const chartTypes = {
    area: <Area {...props} fill={color} stroke={color} />,
    bar: <Bar {...props} fill={color} stroke={color} />,
    line: LineType,
  };

  return chartTypes[type] || LineType;
};

const TypeToChartComponent = {
  combo: ({ resultSet }: ChartProps) => {
    const theme = useTheme();
    const colors = getColors(theme);

    return (
      <CartesianChart ChartComponent={ComposedChart} resultSet={resultSet}>
        {resultSet.seriesNames().map(({ key, shortTitle }, i) =>
          getSubChart({
            color: colors[i],
            key,
            name: shortTitle,
            type: getChartType(resultSet, key),
            yAxisId: i === 0 ? 'left' : 'right',
          }),
        )}
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
  /**
   * function to update chart type
   */
  updateChartType?: (chartType: ChartType) => void;
}

const comboTypes = ['area', 'bar', 'line'];

const ChartRenderer = ({
  height = defaultHeight,
  updateChartType,
  vizState,
}: ChartRendererProps): ReactElement => {
  const { chartType, query, ...options } = vizState;
  const { error, isLoading, resultSet, ...chartProps } = useCubeQuery(query);
  const Component =
    TypeToMemoChartComponent[
      comboTypes.includes(chartType) ? 'combo' : chartType
    ];

  return Component ? (
    <Card
      error={error ? { message: error.toString() } : null}
      loading={isLoading}
      headerAction={
        <SelectChartType
          chartType={chartType}
          updateChartType={updateChartType}
        />
      }
      title="A Chart">
      {!isEmpty(resultSet) && (
        <Component {...chartProps} {...options} resultSet={resultSet} />
      )}
      {isEmpty(resultSet) && <Skeleton height={height} variant="rectangular" />}
    </Card>
  ) : (
    <span />
  );
};

export default ChartRenderer;
