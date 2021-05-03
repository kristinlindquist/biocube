import { RESTDataSource, HTTPCache } from 'apollo-datasource-rest';

const sleepMap = {
  1: 'awake',
  2: 'asleep',
};

// https://developers.google.com/fit/rest/v1/reference/activity-types
const activityMap = {
  93: 'walking',
  45: 'meditation',
  7: 'walking',
  72: 'sleep',
  17: 'spinning',
  112: 'awake',
  80: 'strength training',
  35: 'hiking',
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
    );

  getHeartRate = async (token, start, end, aggregate = false) => {
    const data = await this.getData(
      token,
      new Date(start).getTime(),
      new Date(end).getTime(),
      'com.google.heart_rate.bpm',
      aggregate,
    );

    return data.bucket.flatMap(b =>
      b.dataset[0].point.map(p => ({
        startedAt: new Date(p.startTimeNanos / (1000 * 1000)),
        value: aggregate ? p.value.map(v => v.fpVal) : p.value[0].fpVal,
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

    return data.bucket.flatMap(b =>
      b.dataset[0].point.map(p => ({
        startedAt: new Date(p.startTimeNanos / (1000 * 1000)),
        duration: Math.round((p.endTimeNanos - p.startTimeNanos) / (1000 * 1000)),
        state: aggregate
          ? p.value.map(v => sleepMap[v.intVal])
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

    return data.bucket.flatMap(b =>
      b.dataset[0].point.map(p => ({
        startedAt: new Date(p.startTimeNanos / (1000 * 1000)),
        duration: Math.round((p.endTimeNanos - p.startTimeNanos) / (1000 * 1000)),
        state: activityMap[p.value[0].intVal],
      })),
    );
  };
}
