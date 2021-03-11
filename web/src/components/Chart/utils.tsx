import moment from 'moment';
import { LegendProps } from '@nivo/legends';
import { getMonthDay } from 'components/Date';

export enum AggType {
  AVG = 'average',
  MIN = 'min',
  MAX = 'max',
}

/**
 * Processes stream hr data along with sleep
 * TODO: generalize
 */
export const processHrStream = (
  heartRate: Array<{ date: number; point: number }> | null,
  state: Array<{ start: number; end: number; state: string }> | null,
  allowNull: boolean,
  type = 'awake',
): Array<{ x: string; y: number | null }> =>
  (heartRate || []).map(({ date, point }) => {
    const myState = state
      ? (state.find(({ start, end }) => start < date && end > date) || {}).state
      : null;
    return {
      x: moment(new Date(date)).format('YYYY-MM-DD HH:mm'),
      y: myState === type || (!myState && allowNull) ? point : null,
    };
  });

/**
 * Processes hr aggregate data (daily)
 * TODO: generalize
 */
export const processHrAggregate = (
  data: {
    daily: Array<{
      date: number;
      heartRate: { average: number; min: number; max: number };
    }> | null;
  },
  type: AggType,
): Array<{ day: string; value: number }> =>
  (data ? data.daily : []).map(({ date, heartRate }) => ({
    day: moment(new Date(date)).format('YYYY-MM-DD'),
    value: heartRate[type],
  }));

/**
 * Processes activity data
 * TODO: generalize
 */
export const processActivity = (data: {
  activity: Array<{
    start: number;
    duration: number;
    type: string;
  }>;
}): Array<{ day: string }> =>
  Object.values(
    (data ? data.activity : [])
      .map(({ start, duration, type }) => ({
        day: getMonthDay(new Date(start)),
        [type]: Math.round(duration / (1000 * 60)),
      }))
      .reduce((acc, x) => {
        acc[x.day] = { ...(acc[x.day] || []), ...x };
        return acc;
      }, {} as Record<string, { day: string }>),
  );

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
