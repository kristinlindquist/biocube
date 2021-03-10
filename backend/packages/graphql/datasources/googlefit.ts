import { RESTDataSource } from 'apollo-datasource-rest';
import { get, groupBy } from 'lodash';

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
  }

  willSendRequest(request) {
    request.headers.set(
      'Authorization',
      'Bearer ya29.a0AfH6SMBhfkxH2B8xaIHZyImJaHbbZrmdhxkWMvrcJGN1OlOTfVsAdSvRD25hm8cNkWArClaukHRDxUrqMqDJnUYnPWS4LcQD5C3PJNeduR1K2CTnWDA17BLy69Lze7hLzO9etY2gmzcOVPqYm7zOaqjg9xSd',
      'Content-type',
      'application/json',
    );
  }

  async getData(start, end, type, aggregate) {
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

  async getHeartRate(start, end, aggregate) {
    const data = await this.getData(
      start,
      end,
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

  async getSleep(start, end, aggregate) {
    const data = await this.getData(
      start,
      end,
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

  async getActivity(start, end, aggregate = true) {
    const data = await this.getData(
      start,
      end,
      'com.google.activity.segment',
      aggregate,
    );

    return data.bucket.flatMap((b) =>
      b.dataset[0].point.map((p) => ({
        start: p.startTimeNanos / (1000 * 1000),
        end: p.endTimeNanos / (1000 * 1000),
        duration: p.value[1].intVal,
        type: activityMap[p.value[0].intVal],
      })),
    );
  }

  async getDaily(start, end) {
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
