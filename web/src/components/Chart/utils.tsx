import { LegendProps } from '@nivo/legends';
import moment from 'moment';
import numeral from 'numeral';
import { get } from 'lodash';

import { getMonthDay } from 'components/Date';
import { KeyValuePairs } from 'types';
import { PrimitiveType, ResultSet } from './types';

export enum AggType {
  AVG = 'average',
  MIN = 'min',
  MAX = 'max',
}

/**
 * Processes stream data along with state data (e.g. awake/sleep)
 */
export const processDataStream = (
  data: Array<{ date: number; point: number }> | null,
  states: Array<{ start: number; end: number; state: string }> | null,
  allowNull: boolean,
  state = 'awake',
): Array<{ x: string; y: number | null }> =>
  (data || []).map(({ date, point }) => {
    const myState = states
      ? (states.find(({ start, end }) => start < date && end > date) || {})
          .state
      : null;
    return {
      x: moment(new Date(date)).format('YYYY-MM-DD HH:mm'),
      y: myState === state || (!myState && allowNull) ? point : null,
    };
  });

/**
 * Processes hr aggregate data (daily)
 * TODO: generalize
 */
export const processAggregate = (
  daily: Array<{
    date: number;
    heartRate: { average: number; min: number; max: number };
  }> | null,
  type: AggType,
): Array<{ day: string; value: number }> =>
  (daily || []).map(({ date, heartRate }) => ({
    day: moment(new Date(date)).format('YYYY-MM-DD'),
    value: heartRate[type],
  }));

/**
 * Processes activity data
 * TODO: generalize
 */
export const processActivity = (
  activity: Array<{
    start: number;
    duration: number;
    state: string;
  }>,
): Array<{ day: string }> =>
  Object.values(
    (activity || [])
      .map(({ start, duration, state }) => ({
        day: getMonthDay(new Date(start)),
        [state]: Math.round(duration / (1000 * 60)),
      }))
      .reduce((acc, x) => {
        acc[x.day] = { ...(acc[x.day] || []), ...x };
        return acc;
      }, {} as Record<string, { day: string }>),
  );

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

/**
 * Default Nivo chart legend config
 */
export const getDefaultLegend = (): LegendProps => ({
  anchor: 'top-left',
  direction: 'row',
  justify: false,
  translateX: -25,
  translateY: -40,
  itemsSpacing: 120,
  itemWidth: 0,
  itemHeight: 30,
  itemOpacity: 0.75,
  symbolSize: 20,
  symbolShape: 'circle',
});

// TODO: Make more generalized
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
// END TODO: Make more generalized
