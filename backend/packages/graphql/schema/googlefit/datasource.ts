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
  35: 'hiking'
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
    request.headers.set(
      'Authorization',
      'Bearer ya29.a0AfH6SMCOLnX62IH698HJW4eIH5OGF4VHPxJB2ZYCK_LDK75I26Y_fC-PSnX8-TQj792cRbirxZnxnhZBIA-QkXCpXCOo7X5nFuwwAKRcgmXzyu0WcleoIrIPZgXrg3upgXiHk_FZBYPGhpNyKIAkNxEWYlCE',
      'Content-type',
      'application/json',
    );
  }

  getData = async (start, end, type, aggregate) => {
    return this.post('/fitness/v1/users/me/dataset:aggregate', {
      aggregateBy: [
        {
          dataTypeName: type,
        },
      ],
      bucketByTime: aggregate ? daily : null,
      startTimeMillis: start,
      endTimeMillis: end,
    });
  }

  getHeartRate = async (start, end, aggregate) => {
    const data = await this.getData(
      new Date(start).getTime(),
      new Date(end).getTime(),
      'com.google.heart_rate.bpm',
      aggregate,
    );

    return data.bucket.flatMap((b) =>
      b.dataset[0].point.map((p) => ({
        date: p.startTimeNanos / (1000 * 1000),
        point: aggregate ? p.value.map((v) => v.fpVal) : p.value[0].fpVal,
      })),
    );
  }

  getSleep = async (start, end, aggregate) => {
    const data = await this.getData(
      new Date(start).getTime(),
      new Date(end).getTime(),
      'com.google.sleep.segment',
      aggregate,
    );

    return data.bucket.flatMap((b) =>
      b.dataset[0].point.map((p) => ({
        start: p.startTimeNanos / (1000 * 1000),
        end: p.endTimeNanos / (1000 * 1000),
        state: aggregate
          ? p.value.map((v) => sleepMap[v.intVal])
          : sleepMap[p.value[0].intVal],
      })),
    );
  }

  getActivity = async (start, end, aggregate = true) => {
    const data = await this.getData(
      new Date(start).getTime(),
      new Date(end).getTime(),
      'com.google.activity.segment',
      aggregate,
    );

    return data.bucket.flatMap((b) =>
      b.dataset[0].point.map((p) => ({
        start: p.startTimeNanos / (1000 * 1000),
        end: p.endTimeNanos / (1000 * 1000),
        duration: (p.endTimeNanos - p.startTimeNanos) / (1000 * 1000),
        state: activityMap[p.value[0].intVal],
      })),
    );
  }

  getDaily = async (start, end) => {
    const hrData = await this.getHeartRate(start, end, true);

    return hrData.map(({ date, point }) => ({
      date,
      heartRate: {
        average: Math.round(point[0]),
        min: point[2],
        max: point[1],
      },
    }));
  }
}
