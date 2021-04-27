import { ReactElement } from 'react';
import moment from 'moment';
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import { getMonthDay, getLongDate } from 'components/Date';
import { ChartProps } from './types';
import { numberFormatter, zeroToNull } from './utils';

const defaultHeight = 300;

const xAxisFormatter = (item) =>
  moment(item).isValid() ? getMonthDay(item) : item;

const getAxisProps = (resultSet = null) => ({
  axisLine: false,
  tickFormatter: (value, key) => numberFormatter(value, key, resultSet),
  tickLine: false,
});

/**
 * Chart with axes, grid and legend
 */
const CartesianChart = ({
  children,
  ChartComponent,
  height = defaultHeight,
  resultSet,
  legendLayout,
}: ChartProps): ReactElement => (
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

export default CartesianChart;
