import React, { ReactElement } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { ChartType, useCubeQuery } from '@cubejs-client/react';
import { Query } from '@cubejs-client/core';
import { useMutation } from '@apollo/client';

import ReactECharts from 'echarts-for-react';
import { Box, Skeleton } from '@material-ui/core';
import { isEmpty } from 'lodash';

import { MenuButton } from 'components/Button';
import { Card } from 'components/Card';
import { getMonthDay, getLongDate } from 'components/Date';
import { useDialog } from 'contexts';
import {
  DeleteDashboardGraphDocument as DeleteGraph,
  UpsertDashboardGraphDocument as UpsertGraph,
  modifyCacheOnDelete,
  modifyCacheOnUpdate,
} from 'gql';
import { Table } from 'components/Table';
import { RowType } from 'types';

import { ChartProps } from './types';
import {
  getChartType,
  getDataType,
  resolveFormatter,
  zeroToNull,
} from './utils';

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

const TypeToChartComponent = {
  combo: ({ height, resultSet }: ChartProps) => {
    const theme = useTheme();
    const colors = getColors(theme);
    const series = resultSet.tableColumns().filter((c) => c.type !== 'time');

    return (
      <Box sx={{ height, width: '100%' }}>
        <ReactECharts
          option={{
            dataset: {
              dimensions: [
                'x',
                ...resultSet.seriesNames().map(({ key }) => key),
              ],
              source: zeroToNull(resultSet.chartPivot()),
            },
            grid: {
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
              containLabel: true,
            },
            series: series.map(({ key, shortTitle }, i) => ({
              lineStyle: {
                color: colors[i],
              },
              connectNulls: true,
              encode: {
                x: 'x',
                y: key,
              },
              name: shortTitle,
              seriesLayoutBy: 'row',
              tooltip: [key],
              type: getChartType(resultSet, key),
              yAxisIndex: Math.min(i, 1),
            })),
            tooltip: {
              trigger: 'axis',
              formatter: (params) => {
                const { name, seriesName, value } = params[0] || {};
                const values = series.map(({ key }) => key);
                return `${getLongDate(
                  new Date(name),
                )} <br /> ${seriesName}: ${values.map((v) =>
                  (value[v] || 0).toFixed(2),
                )}`;
              },
            },
            xAxis: {
              axisLabel: {
                formatter: (value) => getMonthDay(new Date(value)),
              },
              type: 'category',
            },
            yAxis: series.map(({ shortTitle }) => ({
              name: shortTitle,
              type: 'value',
            })),
          }}
        />
      </Box>
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

/**
 * Render a chart by type
 */
const ChartRenderer = ({
  height = defaultHeight,
  id,
  name = 'A Chart',
  updateChartType,
  vizState,
}: ChartRendererProps): ReactElement => {
  const { chartType, query, ...options } = vizState;
  const [, { close, open }] = useDialog();
  const { error, isLoading, resultSet, ...chartProps } = useCubeQuery(query);
  const [mutation] = useMutation(UpsertGraph, {
    update(cache, { data }) {
      modifyCacheOnUpdate(
        cache,
        data,
        'GetDashboardGraphsQuery',
        'DashboardGraphs',
      );
    },
  });
  const [deleteMutation] = useMutation(DeleteGraph, {
    update(cache, { data }) {
      modifyCacheOnDelete(cache, data);
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
            true
              ? null
              : {
                  name: 'Change Type',
                  onClick: () => updateChartType('line'),
                },
            {
              name: id ? 'Edit' : 'Save',
              onClick: () =>
                open({
                  fields: [{ id: 'name', name: 'Name', type: 'string' }],
                  onClose: () => close(),
                  onSubmit: (values) => mutation(values),
                  title: 'Edit',
                  values: { id, layout: {}, name, vizState },
                }),
            },
            {
              name: 'Delete',
              onClick: () => deleteMutation({ variables: { input: { id } } }),
            },
          ].filter((o) => o)}
        />
      }
      title={name}>
      {!isEmpty(resultSet) && Component && (
        <Component
          {...chartProps}
          {...options}
          height={height}
          resultSet={resultSet}
        />
      )}
      {isEmpty(resultSet) && <Skeleton height={height} variant="rectangular" />}
    </Card>
  );
};

export default ChartRenderer;
