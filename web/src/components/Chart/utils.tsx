import numeral from 'numeral';
import { get, mean, startCase } from 'lodash';
import { EChartOption } from 'echarts';
import { SeriesNamesColumn } from '@cubejs-client/core';

import { getLongDate } from 'components/Date';
import { KeyValuePairs } from 'types';
import {
  EchartsApi,
  EchartsParam,
  EchartsRenderItemProps,
  PrimitiveType,
  ResultSet,
} from './types';

const annotationBase = 'loadResponse.results[0].annotation';
const measuresBase = `${annotationBase}.measures`;

type EChartSeries = Partial<EChartOption & { key: string; yAxisIndex: number }>;

/**
 * Maps zeros to nulls, for better presentation in chart
 */
export const zeroToNull = (
  data: Array<KeyValuePairs | string>,
): Array<KeyValuePairs | string> =>
  typeof data[0] !== 'string'
    ? data.map((d) =>
        Object.fromEntries(
          Object.entries(d).map(([k, v]) => [k, v !== 0 ? v : null]),
        ),
      )
    : data;

const nullFactor = 0.1;

const getStdValue = (d, key, avg, baseValue = null) =>
  baseValue
    ? {
        ...d,
        [`${key}-U`]: d[key] * 4,
        [`${key}-L`]: baseValue - d[key] * 2,
      }
    : {
        ...d,
        [`${key}-U`]: avg * nullFactor,
        [`${key}-L`]: (1 - nullFactor) * avg,
      };

const getMainKey = (key, keyType = '') => key.split(`_${keyType}`)[0];

/**
 * Adds std to base
 */
export const processStds = (
  data: Array<KeyValuePairs | string>,
  keyType = 'std',
): Array<KeyValuePairs | string> => {
  if (typeof data[0] === 'string') {
    return data;
  }

  let newData = data as Array<KeyValuePairs>;
  const keys = Object.keys(data[0]);

  keys.forEach((key) => {
    const baseKey = getMainKey(key, keyType);
    if (key !== baseKey && keys.includes(baseKey)) {
      const avg = mean(data.map((d2) => d2[baseKey]).filter((d2) => d2));
      newData = newData.map((d) => getStdValue(d, key, avg, d[baseKey]));
    }
  });

  return newData;
};

export const renderErrorBar = (
  params: EchartsParam,
  api: EchartsApi,
  relatedIndex: number,
): EchartsRenderItemProps => {
  const yValue = api.value(relatedIndex) || 0;
  const yStd = api.value(params.encode.y[0]);
  const highPoint = api.coord([params.dataIndex, yValue + yStd * 2]);
  const lowPoint = api.coord([params.dataIndex, yValue - yStd * 2]);
  const halfWidth = api.size([1, 0])[0] * 0.1;

  const options = {
    transition: ['shape'],
    type: 'line',
  };

  return {
    children: [
      {
        ...options,
        shape: {
          x1: highPoint[0] - halfWidth,
          y1: highPoint[1],
          x2: highPoint[0] + halfWidth,
          y2: highPoint[1],
        },
      },
      {
        ...options,
        shape: {
          x1: highPoint[0],
          y1: highPoint[1],
          x2: lowPoint[0],
          y2: lowPoint[1],
        },
      },
      {
        ...options,
        shape: {
          x1: lowPoint[0] - halfWidth,
          y1: lowPoint[1],
          x2: lowPoint[0] + halfWidth,
          y2: lowPoint[1],
        },
      },
    ],
    type: 'group',
  };
};
/**
 * Get cubejs meta obj
 */
const getMeta = (
  resultSet: ResultSet<string>,
  key,
): { chartType: string; stack?: string; uom: string } => {
  const obj = get(resultSet, measuresBase) || {};

  // accounts for interval keys (e.g. myval_std -> myval) AND
  // dimensional keys (e.g. RUNNING, Data.Exercise -> Data.exercise)
  const actualKey = Object.keys(obj).find((k) => key.includes(k));

  return (
    (obj[actualKey] || {}).meta || {
      uom: '',
    }
  );
};

/**
 * default chart type from meta on cubejs
 */
export const getChartDetails = (
  resultSet: ResultSet<string>,
  key: string,
): { stack?: string; type?: string } => {
  const meta = getMeta(resultSet, key);

  return meta
    ? {
        stack: meta.stack,
        type: (meta.chartType || 'line').toLowerCase(),
      }
    : {};
};

/**
 * default data type on cubejs
 */
export const getDataType = (
  resultSet: ResultSet<string>,
  key: string,
): string =>
  get(
    (get(resultSet, measuresBase) || {})[key] ||
      (get(resultSet, `${annotationBase}.dimensions`) || {})[key] ||
      {},
    'type',
  );

/**
 * Get cubejs series obj for intervals
 */
export const getIntervalObj = (
  obj: KeyValuePairs,
  side = 'L',
): KeyValuePairs => ({
  ...obj,
  areaStyle:
    side === 'U'
      ? {
          color: '#ccc',
          opacity: 0.3,
        }
      : undefined,
  encode: { x: 'x', y: `${obj.key}-${side}` },
  key: `${obj.key}-${side}`,
  stack: `${obj.key} interval-band`,
});

const getColDetail = (resultSet, key) =>
  resultSet.tableColumns().find((t) => t.key === key) ||
  resultSet.tableColumns().find((t) => key && key.includes(t.key)) ||
  {};

const getColIndex = (resultSet, key) =>
  Object.keys(resultSet.chartPivot()[0]).indexOf(key);

/**
 * Get axis unit of measure
 */
const getUom = (resultSet: ResultSet<string>, v: string): string =>
  (getColDetail(resultSet, v).meta || {}).uom;

/**
 * Get axis index (in case multiple y axes)
 */
const getAxisIndex = (resultSet, currKey, prevKey, index) =>
  getUom(resultSet, currKey) !== getUom(resultSet, prevKey)
    ? Math.min(index, 1)
    : 0;

/**
 * Turn cubejs series into Echart series
 */
export const getSeries = (
  series: Partial<SeriesNamesColumn>[],
  resultSet: ResultSet<string>,
): EChartSeries[] =>
  series.flatMap((s, i) => {
    const { stack, type } = getChartDetails(resultSet, s.key);
    const isInterval = s.key.includes('std') && type !== 'bar';
    const isBarInterval = s.key.includes('std') && type === 'bar';
    const relatedIndex = getColIndex(resultSet, getMainKey(s.key));

    const obj = {
      ...s,
      barMaxWidth: '30%',
      connectNulls: true,
      encode: {
        x: 'x',
        y: s.key,
      },
      itemStyle: {
        normal: {
          borderWidth: 2,
        },
      },
      lineStyle: {
        opacity: isInterval ? 0 : 1,
        width: 2,
      },
      name: getColDetail(resultSet, s.key).subtitle,
      renderItem: isBarInterval
        ? (params, api) => renderErrorBar(params, api, relatedIndex)
        : undefined,
      seriesLayoutBy: 'row',
      stack,
      symbolSize: isInterval ? 0 : 7,
      tooltip: !isInterval ? [s.key] : undefined,
      type: isBarInterval ? 'custom' : type,
      yAxisIndex: getAxisIndex(
        resultSet,
        s.key,
        i > 0 ? series[i - 1].key : null,
        i,
      ),
    };

    return isInterval
      ? [getIntervalObj(obj, 'L'), getIntervalObj(obj, 'U')]
      : [obj];
  });

const getDisplayName = (name) => {
  let n = '';
  if (name.includes(',')) {
    [n] = name.split(',');
  } else if (name.includes('.')) {
    [, n] = name.split('.');
  }
  return startCase(n);
};

export const formatTooltip = (
  params: Array<{ name: string; value: string }>,
  series: EChartSeries[],
  resultSet: ResultSet<string>,
): string => {
  const { name, value } = params[0] || {};
  const values = series.filter(({ tooltip }) => tooltip).map(({ key }) => key);
  return `${getLongDate(new Date(name))} <br /> ${values
    .filter((v) => value[v])
    .map(
      (v) =>
        `${getDisplayName(v)}: ${value[v].toFixed(2)} ${
          getUom(resultSet, v) || v
        }`,
    )
    .join('<br />')}`;
};

export const numberFormatter = (
  item: number,
  key: string,
  resultSet: ResultSet<string> = null,
): string => {
  const { uom } = getMeta(resultSet, key);
  return `${numeral(item).format('0,0')} ${uom || ''}`;
};

export const resolveFormatter = (
  type: string,
): ((value: PrimitiveType) => string | number | boolean) => {
  const formatters = {
    number: numberFormatter,
  };
  return formatters[type] || ((item) => item);
};
