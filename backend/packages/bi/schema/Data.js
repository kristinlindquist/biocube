import { camelCase, get } from 'lodash';
import fetch from 'node-fetch';

const mQuery = {
  variables: {
    input: {},
  },
  query: `query getMeasures($input: GetMeasuresInput!) {
    getMeasures(input: $input) {
      measures {
        id
        name
      }
    }
  }`,
};

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
    sql: `SELECT * FROM public."Datum"`,
    title: `Data - `,

    joins: {
      DataType: {
        sql: `${CUBE}."dataTypeId" = ${DataType}.id`,
        relationship: `belongsTo`,
      },

      Device: {
        sql: `${CUBE}."deviceId" = ${Device}.id`,
        relationship: `belongsTo`,
      },

      State: {
        sql: `${Data}."startedAt" > ${State}."startedAt" AND ${Data}."startedAt" < ${State}."startedAt" + interval '1 hour' * ${State}.duration / (1000 * 60 * 60)`,
        relationship: `hasMany`,
      },
    },

    measures: {
      ...measures
        .map(m => ({
          [camelCase(m.name)]: {
            sql: `${Measure}.id = '${m.id}'`,
            title: `${m.name}`,
            type: `avg`,
          },
        }))
        .reduce((a, b) => Object.assign(a, b)),

      average: {
        sql: `value`,
        type: `avg`,
      },

      duration: {
        sql: `duration`,
        type: `sum`,
      },

      rollingHour: {
        sql: `value`,
        type: `avg`,
        rollingWindow: {
          trailing: `1 hour`,
        },
      },

      rollingDay: {
        sql: `value`,
        type: `avg`,
        rollingWindow: {
          trailing: `1 day`,
        },
      },

      rollingWeek: {
        sql: `value`,
        type: `avg`,
        rollingWindow: {
          trailing: `1 week`,
        },
      },

      rollingMonth: {
        sql: `value`,
        type: `avg`,
        rollingWindow: {
          trailing: `1 month`,
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

      startedAt: {
        sql: `${CUBE}."startedAt"`,
        type: `time`,
        title: `Starting Time`,
      },

      state: {
        sql: `${State}.state`,
        type: `string`,
      },
    },

    dataSource: `default`,
  });
});
