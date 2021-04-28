import React, { ReactElement } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { ChartType, useCubeQuery } from '@cubejs-client/react';
import { Query } from '@cubejs-client/core';
import { useMutation } from '@apollo/client';
import numeral from 'numeral';
import {
  Area,
  Bar,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Skeleton } from '@material-ui/core';
import { isEmpty } from 'lodash';

import { MenuButton } from 'components/Button';
import { Card } from 'components/Card';
import { useDialog } from 'contexts';

import {
  DeleteDashboardGraphDocument as DeleteGraph,
  UpsertDashboardGraphDocument as UpsertGraph,
} from 'gql';
import { Table } from 'components/Table';
import { RowType } from 'types';
import { getReturnObj } from 'utils';

import CartesianChart from './CartesianChart';
import { ChartProps } from './types';
import { getChartType, getDataType, resolveFormatter } from './utils';

export interface ChartRendererProps {
  /**
   * Chart Id, if saved
   */
  id?: number;
  /**
   * Chart height
   */
  height?: number;
  /**
   * Chart Name
   */
  name?: string;
  /**
   * Vizstate (cubejs)
   */
  vizState: {
    chartType: ChartType;
    query: Query | Query[];
  };
  /**
   * Function to update chart type
   */
  updateChartType?: (chartType: ChartType) => void;
}

const comboTypes = ['area', 'bar', 'line'];
const defaultHeight = 300;

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

type SubChartProps = {
  color: string;
  key: string;
  name: string;
  type: string;
  yAxisId: string;
};

const getSubChart = ({ color, key, name, type, yAxisId }: SubChartProps) => {
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
          {legendLayout && <Legend align="right" layout={legendLayout} />}
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  },
  table: ({ resultSet }: ChartProps) => (
    <Table
      rows={
        resultSet.tablePivot().map((row) =>
          resultSet
            .tableColumns()
            .map(({ key }) => ({
              key: Object.values(row)[0] as string,
              [key]: resolveFormatter(getDataType(resultSet, key))(row[key]),
            }))
            .reduce((a, b) => ({ ...a, ...b })),
        ) as RowType[]
      }
      size="small"
    />
  ),
};

const TypeToMemoChartComponent = Object.keys(TypeToChartComponent)
  .map((key) => ({
    [key]: React.memo(TypeToChartComponent[key]),
  }))
  .reduce((a, b) => ({ ...a, ...b }));

const ChartRenderer = ({
  height = defaultHeight,
  id,
  name = 'A Chart',
  updateChartType,
  vizState,
}: ChartRendererProps): ReactElement => {
  const { chartType, query, ...options } = vizState;
  const [, { open }] = useDialog();
  const { error, isLoading, resultSet, ...chartProps } = useCubeQuery(query);
  const [mutate] = useMutation(UpsertGraph);
  const [deleteMutation] = useMutation(DeleteGraph, {
    update(cache, { data: d }) {
      cache.evict({
        id: cache.identify(getReturnObj(d, 'delete')),
      });
    },
  });
  const Component =
    TypeToMemoChartComponent[
      comboTypes.includes(chartType) ? 'combo' : chartType
    ];

  return (
    <Card
      error={error ? { message: error.toString() } : null}
      loading={isLoading}
      headerAction={
        <MenuButton
          options={[
            { name: 'Change Type', onClick: () => updateChartType('line') },
            {
              name: 'Edit',
              onClick: () =>
                open({
                  fields: [{ id: 'name', name: 'Name', type: 'string' }],
                  onSubmit: (values) => mutate(values),
                  title: 'Save',
                  values: { layout: {}, name, vizState },
                }),
            },
            {
              name: 'Delete',
              onClick: () => deleteMutation({ variables: { input: { id } } }),
            },
            { name: 'Save', onClick: () => {} },
          ]}
        />
      }
      title={name}>
      {!isEmpty(resultSet) && Component && (
        <Component {...chartProps} {...options} resultSet={resultSet} />
      )}
      {isEmpty(resultSet) && <Skeleton height={height} variant="rectangular" />}
    </Card>
  );
};

export default ChartRenderer;
