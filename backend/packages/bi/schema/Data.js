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
        aggregation
        chartType
        components {
          filters {
            dimension
            join
            operator
            values
          }
        }
        meta
        name
        sql
        status
      }
    }
  }`,
};

const HOUR = '(1000 * 60 * 60)';

const getFilter = ({ dimension, operator, values }) =>
  `${dimension} ${operator} (${values.map(v => `'${v}'`).join(',')})`;

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

      ConcurrentState: {
        sql: `${CUBE}."startedAt" > ${ConcurrentState}."startedAt"
          AND ${CUBE}."startedAt" < ${ConcurrentState}."startedAt" + interval '1 hour'
          * ${ConcurrentState}.duration / ${HOUR}`,
        relationship: `hasOne`,
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
                .map(f => ({
                  sql:
                    (f.join || 'ConcurrentState') === 'ConcurrentState'
                      ? `${ConcurrentState}.${getFilter(f)}`
                      : `${CUBE}.${getFilter(f)}`,
                })),
            ],
            meta: { ...(m.meta || {}), chartType: m.chartType },
            sql: m.sql ? `${CUBE}.${m.sql}` : `value`, // TODO: "CUBE" is fragile
            title: m.name,
            type: m.aggregation
              ? camelCase(m.aggregation.toLowerCase())
              : `avg`,
          },
        }))
        .reduce((a, b) => Object.assign(a, b)),

      average: {
        sql: `value`,
        type: `avg`,
      },

      duration: {
        sql: `duration / ${HOUR}`,
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
        sql: `${ConcurrentState}.state`,
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
