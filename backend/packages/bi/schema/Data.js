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
        components {
          filters {
            dimension
            operator
            values
          }
        }
        status
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
    title: `D -`,

    joins: {
      DataType: {
        sql: `${CUBE}."dataTypeId" = ${DataType}.id`,
        relationship: `belongsTo`,
      },

      Device: {
        sql: `${CUBE}."deviceId" = ${Device}.id`,
        relationship: `belongsTo`,
      },

      MeasureComponent: {
        sql: `${CUBE}."dataTypeId" = ${MeasureComponent}."dataTypeId"`,
        relationship: `belongsTo`,
      },

      State: {
        sql: `${CUBE}."startedAt" > ${State}."startedAt"
          AND ${CUBE}."startedAt" < ${State}."startedAt" + interval '1 hour'
          * ${State}.duration / (1000 * 60 * 60)`,
        relationship: `belongsTo`,
      },
    },

    measures: {
      ...measures
        .filter(m => m.status !== 'DRAFT')
        .map(m => ({
          [camelCase(m.name)]: {
            filters: [
              { sql: `${MeasureComponent}."measureId" = ${m.id}` },
              ...(m.components || [])
                .flatMap(c => c.filters || [])
                .map(({ dimension, operator, values }) => ({
                  sql: `${State}.${dimension} ${operator} (${values
                    .map(v => `'${v}'`)
                    .join(',')})`,
                })),
            ],
            sql: `value`,
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
        sql: `duration / (1000 * 60 * 60)`, // hour
        title: `Hours`,
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

      sum: {
        sql: `value`,
        type: `sum`,
      },
    },

    dimensions: {
      concurrentState: {
        sql: `${State}.state`,
        type: `string`,
      },

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
        sql: `${CUBE}.state`,
        type: `string`,
      },
    },

    dataSource: `default`,
  });
});
