import React, { ReactElement } from 'react';
import { Theme, useTheme } from '@material-ui/core/styles';
import { ChartType, useCubeQuery, VizState } from '@cubejs-client/react';
import { useMutation } from '@apollo/client';

import ReactECharts from 'echarts-for-react';
import { Box, Skeleton } from '@material-ui/core';
import { isEmpty } from 'lodash';

import { MenuButton } from 'components/Button';
import { Card } from 'components/Card';
import { getMonthDay } from 'components/Date';
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
  formatTooltip,
  getDataType,
  getSeries,
  resolveFormatter,
  processStds,
  zeroToNull,
} from './utils';

export interface ChartRendererProps {
  /**
   * Chart description
   */
  description?: string;
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
   * Show query builder
   */
  open?: () => void;
  /**
   * Vizstate (cubejs)
   */
  vizState: VizState;
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
    const series = getSeries(resultSet.seriesNames(), resultSet);

    return (
      <Box sx={{ height, width: '100%' }}>
        <ReactECharts
          option={{
            color: colors,
            dataset: {
              source: zeroToNull(processStds(resultSet.chartPivot())),
            },
            grid: {
              containLabel: true,
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            },
            series,
            tooltip: {
              trigger: 'axis',
              formatter: (params) => formatTooltip(params, series, resultSet),
            },
            xAxis: {
              axisLabel: {
                formatter: (value) => getMonthDay(new Date(value)),
              },
              type: 'category',
            },
            yAxis: series
              .filter((s, i) => s.yAxisIndex > 0 || i === 0)
              .map(({ title }) => ({
                name: title,
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
  description,
  height = defaultHeight,
  id,
  name = 'A Chart',
  open,
  updateChartType,
  vizState,
}: ChartRendererProps): ReactElement => {
  const { chartType, query, ...options } = vizState;
  const [, { close: closeDialog, open: openDialog }] = useDialog();
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
      loading={isLoading && isEmpty(resultSet)}
      headerAction={
        <MenuButton
          options={[
            true
              ? null
              : {
                  name: 'Change Type',
                  onClick: () => updateChartType('line'),
                },
            open
              ? {
                  name: 'Edit',
                  onClick: () => open(),
                }
              : null,
            {
              name: 'Save',
              onClick: () =>
                openDialog({
                  fields: [
                    { id: 'name', name: 'Name', type: 'string' },
                    { id: 'description', name: 'Description', type: 'text' },
                  ],
                  onClose: () => closeDialog(),
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
      subtitle={description}
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
