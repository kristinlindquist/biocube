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

const getFilter = ({ dimension, operator, values }) =>
  `${dimension} ${operator} (${values.map((v) => `'${v}'`).join(',')})`;

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

      ConcurrentState: {
        sql: `${CUBE}.id <> ${ConcurrentState}.id
          AND ${CUBE}."startedAt" >= ${ConcurrentState}."startedAt"
          AND ${CUBE}."startedAt" < ${ConcurrentState}."startedAt" + interval '1 hour'
          * ${ConcurrentState}.duration / ${HOUR}`,
        relationship: `belongsTo`,
      },
    },

    measures: {
      ...measures
        .filter((m) => m.status !== 'DRAFT')
        .map((m) => ({
          [camelCase(m.name)]: {
            filters: [
              {
                sql: `${CUBE}."measureId" in (${[
                  m.id,
                  ...(m.components || []).map((c) => c.id),
                ].join(', ')})`,
              },
              ...(get(m, 'recipe.filters') || []).map((f) => ({
                sql:
                  (f.join || 'ConcurrentState') === 'ConcurrentState'
                    ? `${ConcurrentState}.${getFilter(f)}`
                    : `${CUBE}.${getFilter(f)}`,
              })),
              // ...(m.components || [])
              //   .flatMap((c) => c.filters || [])
              //   .map((f) => ({
              //     sql:
              //       (f.join || 'ConcurrentState') === 'ConcurrentState'
              //         ? `${ConcurrentState}.${getFilter(f)}`
              //         : `${CUBE}.${getFilter(f)}`,
              //   })),
            ],
            meta: {
              ...(m.meta || {}),
              chartType: get(m, 'reports.0.chartType') || 'line',
            },
            sql: `${CUBE}.${get(m, 'recipe.sql') || 'value'}`, // TODO: "CUBE" is fragile
            title: m.name,
            type: camelCase(
              get(m, 'recipe.aggregation') || 'avg',
            ).toLowerCase(),
          },
        }))
        .reduce((a, b) => Object.assign(a, b)),

      standardDeviation: {
        sql: `stddev_samp(value)`,
        type: `number`,
      },

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
    },

    dataSource: `default`,
  });
});
