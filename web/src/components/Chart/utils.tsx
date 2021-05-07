import numeral from 'numeral';
import { get } from 'lodash';

import { KeyValuePairs } from 'types';
import { PrimitiveType, ResultSet } from './types';

export enum AggType {
  AVG = 'average',
  MIN = 'min',
  MAX = 'max',
}

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

const annotationBase = 'loadResponse.results[0].annotation';
const measuresBase = `${annotationBase}.measures`;

const getMeta = (
  resultSet: ResultSet<string>,
  key,
): { chartType: string; uom: string } =>
  ((get(resultSet, measuresBase) || {})[key] || {}).meta || {
    uom: '',
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

/**
 * default chart type from meta on cubejs
 */
export const getChartType = (
  resultSet: ResultSet<string>,
  key: string,
): string => {
  const meta = getMeta(resultSet, key);
  return meta && meta.chartType ? meta.chartType.toLowerCase() : 'line';
};

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
