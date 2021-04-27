import React, { ReactElement, ReactNode } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { ChartType, useCubeQuery } from '@cubejs-client/react';
import { Query } from '@cubejs-client/core';
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
import { Skeleton } from '@material-ui/core';
import { get, isEmpty } from 'lodash';

import { Card } from 'components/Card';
import { getMonthDay, getLongDate } from 'components/Date';
import { Table } from 'components/Table';
import { RowType } from 'types';
import SelectChartType from '../QueryBuilder/SelectChartType';
import { zeroToNull } from './utils';

export type LayoutType = 'horizontal' | 'vertical' | 'centric' | 'radial';
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
const defaultHeight = 300;
const measuresBase = `${annotationBase}.measures`;

const getMeta = (resultSet, key) =>
  ((get(resultSet, measuresBase) || {})[key] || {}).meta || {
    uom: '',
  };

const numberFormatter = (item, key, resultSet = null) => {
  const { uom } = getMeta(resultSet, key);
  return `${numeral(item).format('0,0')} ${uom || ''}`;
};

const resolveFormatter = (type) => {
  const formatters = {
    number: numberFormatter,
  };
  return formatters[type] || ((item) => item);
};

const xAxisFormatter = (item) =>
  moment(item).isValid() ? getMonthDay(item) : item;

const getAxisProps = (resultSet = null) => ({
  axisLine: false,
  tickFormatter: (value, key) => numberFormatter(value, key, resultSet),
  tickLine: false,
});

/**
 * default chart type from meta on cubejs
 */
const getChartType = (resultSet, key) => {
  const meta = getMeta(resultSet, key);
  return meta && meta.chartType ? meta.chartType.toLowerCase() : 'line';
};

const getType = (resultSet, key) =>
  get(
    (get(resultSet, measuresBase) || {})[key] ||
      (get(resultSet, `${annotationBase}.dimensions`) || {})[key] ||
      {},
    'type',
  );

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
        {...getAxisProps()}
        dataKey="x"
        minTickGap={20}
        tickFormatter={xAxisFormatter}
      />
      <YAxis {...getAxisProps(resultSet)} yAxisId="left" />
      <YAxis {...getAxisProps(resultSet)} orientation="right" yAxisId="right" />
      <CartesianGrid vertical={false} />
      {children}
      {legendLayout && <Legend />}
      <Tooltip
        formatter={(value, key) => [
          numberFormatter(value, key, resultSet),
          key,
        ]}
        labelFormatter={getLongDate}
      />
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
    <Line
      {...props}
      connectNulls
      isAnimationActive={false}
      stroke={color}
      strokeWidth={1.5}
    />
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
    <Table
      size="small"
      rows={
        resultSet.tablePivot().map((row) =>
          resultSet
            .tableColumns()
            .map(({ key }) => ({
              key: Object.values(row)[0] as string,
              [key]: resolveFormatter(getType(resultSet, key))(row[key]),
            }))
            .reduce((a, b) => ({ ...a, ...b })),
        ) as RowType[]
      }
    />
  ),
};

const TypeToMemoChartComponent = Object.keys(TypeToChartComponent)
  .map((key) => ({
    [key]: React.memo(TypeToChartComponent[key]),
  }))
  .reduce((a, b) => ({ ...a, ...b }));

export interface ChartRendererProps {
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
