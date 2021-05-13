import { camelCase, get } from 'lodash';
import fetch from 'node-fetch';

import { getMeasures } from './utils';

const mQuery = {
  variables: {
    input: {},
  },
  query: `query getMeasures($input: GetMeasuresInput!) {
    getMeasures(input: $input) {
      measures {
        id
        components {
          id
        }
        recipe {
          aggregation
          filters {
            dimension
            join
            operator
            values
          }
          sql
        }
        reports {
          chartType
          meta
        }
        name
        status
      }
    }
  }`,
};

const HOUR = '(1000.0 * 60.0 * 60.0)';

asyncModule(async () => {
  const measures = get(
    await (
      await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mQuery),
      })
    ).json(),
    'data.getMeasures.measures',
  );

  cube(`Data`, {
    sql: `SELECT * FROM public."Data"`,

    joins: {
      Measure: {
        sql: `${CUBE}."dataTypeId" = ${Measure}.id`,
        relationship: `belongsTo`,
      },

      ConcurrentState: {
        sql: `${CUBE}.id <> ${ConcurrentState}.id
          AND ${CUBE}."startedAt" >= ${ConcurrentState}."startedAt"
          AND ${CUBE}."startedAt" < ${ConcurrentState}."startedAt" + interval '1 hour'
          * ${ConcurrentState}.duration / ${HOUR}`,
        relationship: `belongsTo`,
      },
    },

    measures: {
      ...getMeasures(measures),
      ...getMeasures(measures, 'std'),

      average: {
        sql: `value`,
        type: `avg`,
      },

      duration: {
        sql: `${CUBE}.duration / ${HOUR}`,
        title: `Duration (hours)`,
        type: `sum`,
      },

      rollingHour: {
        sql: `value`,
        type: `avg`,
        rollingWindow: {
          trailing: `1 hour`,
        },
      },

      sum: {
        sql: `value`,
        type: `sum`,
      },
    },

    dimensions: {
      id: {
        sql: `id`,
        type: `number`,
        primaryKey: true,
      },

      myState: {
        sql: `state`,
        type: `string`,
      },

      startedAt: {
        sql: `${CUBE}."startedAt"`,
        type: `time`,
        title: `Starting Time`,
      },
    },

    dataSource: `default`,
  });
});
