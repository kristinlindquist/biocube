import { RESTDataSource, HTTPCache } from 'apollo-datasource-rest';
import { logger } from '@backend/utils';

const sleepMap = {
  1: 'awake',
  2: 'asleep',
};

// https://developers.google.com/fit/rest/v1/reference/activity-types
const activityMap = {
  0: 'in vehicle',
  1: 'biking',
  3: 'still',
  4: 'unknown',
  5: 'tilting',
  7: 'walking',
  8: 'running',
  9: 'aerobics',
  10: 'badminton',
  11: 'baseball',
  12: 'basketball',
  13: 'biathlon',
  14: 'handbiking',
  15: 'mountain biking',
  16: 'road biking',
  17: 'spinning',
  18: 'stationary biking',
  19: 'utility biking',
  20: 'boxing',
  21: 'calisthenics',
  22: 'circuit training',
  23: 'cricket',
  24: 'dancing',
  25: 'elliptical',
  26: 'fencing',
  27: 'american football',
  28: 'australian football',
  29: 'soccer',
  30: 'frisbee',
  31: 'gardening',
  32: 'golf',
  33: 'gymnastics',
  34: 'handball',
  35: 'hiking',
  36: 'hockey',
  37: 'horseback riding',
  38: 'housework',
  39: 'jumping rope',
  40: 'kayaking',
  41: 'kettlebell training',
  42: 'kickboxing',
  43: 'kitesurfing',
  44: 'martial arts',
  45: 'meditation',
  46: 'mixed martial arts',
  47: 'p90x exercises',
  48: 'paragliding',
  49: 'pilates',
  50: 'polo',
  51: 'racquetball',
  52: 'rock climbing',
  53: 'rowing',
  54: 'rowing machine',
  55: 'rugby',
  56: 'jogging',
  57: 'sand running',
  58: 'treadmill running',
  59: 'sailing',
  60: 'scuba diving',
  61: 'skateboarding',
  62: 'skating',
  63: 'cross skating',
  64: 'inline skating',
  65: 'skiing',
  66: 'backcountry skiing',
  67: 'crosscountry skiing',
  68: 'downhill skiing',
  69: 'kite skiing',
  70: 'roller skiing',
  71: 'sledding',
  73: 'snowboarding',
  74: 'snowmobile',
  75: 'snowshoeing',
  76: 'squash',
  77: 'stair climbing',
  78: 'stair climbing machine',
  79: 'stand up paddleboarding',
  80: 'strength training',
  81: 'surfing',
  82: 'swimming',
  83: 'pool swimming',
  84: 'open water swimming',
  85: 'table tennis',
  86: 'team sports',
  87: 'tennis',
  88: 'treadmill',
  89: 'volleyball',
  90: 'beach volleyball',
  91: 'indoor volleyball',
  92: 'wakeboarding',
  93: 'fitness walking',
  94: 'nording walking',
  95: 'treadmill walking',
  96: 'waterpolo',
  97: 'weightlifting',
  98: 'wheelchair',
  99: 'windsurfing',
  100: 'yoga',
  101: 'zumba',
  102: 'diving',
  103: 'ergometer',
  104: 'ice skating',
  105: 'indoor skating',
  106: 'curling',
  108: 'other',
  113: 'crossfit',
  114: 'hiit',
  115: 'interval training',
  116: 'stroller walking',
  117: 'elevator',
  118: 'escalator',
  119: 'archery',
  120: 'softball',
  122: 'guided breathing',
};

const daily = {
  durationMillis: 86400000,
  period: {
    type: 'day',
    value: 1,
    timeZoneId: 'UTC',
  },
};

export class GoogleFitnessAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.googleapis.com';
    this.httpCache = new HTTPCache();
  }

  willSendRequest(request) {
    request.headers.set('Content-type', 'application/json');
  }

  getData = async (token, start, end, type, aggregate) =>
    this.post(
      '/fitness/v1/users/me/dataset:aggregate',
      {
        aggregateBy: [
          {
            dataTypeName: type,
          },
        ],
        bucketByTime: aggregate ? daily : null,
        startTimeMillis: start,
        endTimeMillis: end,
      },
      { headers: { Authorization: `Bearer ${token}` } },
    ).catch((error) => {
      logger.log({ level: 'error', message: error });
      throw Error(error);
   });

  getHeartRate = async (token, start, end, aggregate = false) => {
    const data = await this.getData(
      token,
      new Date(start).getTime(),
      new Date(end).getTime(),
      'com.google.heart_rate.bpm',
      aggregate,
    );

    return data.bucket.flatMap((b) =>
      b.dataset[0].point.map((p) => ({
        startedAt: new Date(p.startTimeNanos / (1000 * 1000)),
        value: aggregate ? p.value.map((v) => v.fpVal) : p.value[0].fpVal,
      })),
    );
  };

  getSleep = async (token, start, end, aggregate = false) => {
    const data = await this.getData(
      token,
      new Date(start).getTime(),
      new Date(end).getTime(),
      'com.google.sleep.segment',
      aggregate,
    );

    return data.bucket.flatMap((b) =>
      b.dataset[0].point.map((p) => ({
        startedAt: new Date(p.startTimeNanos / (1000 * 1000)),
        duration: Math.round(
          (p.endTimeNanos - p.startTimeNanos) / (1000 * 1000),
        ),
        state: aggregate
          ? p.value.map((v) => sleepMap[v.intVal])
          : sleepMap[p.value[0].intVal],
      })),
    );
  };

  getActivity = async (token, start, end, aggregate = false) => {
    const data = await this.getData(
      token,
      new Date(start).getTime(),
      new Date(end).getTime(),
      'com.google.activity.segment',
      aggregate,
    );

    return data.bucket.flatMap((b) =>
      b.dataset[0].point.map((p) => ({
        startedAt: new Date(p.startTimeNanos / (1000 * 1000)),
        duration: Math.round(
          (p.endTimeNanos - p.startTimeNanos) / (1000 * 1000),
        ),
        state: activityMap[p.value[0].intVal],
      })),
    );
  };
}
