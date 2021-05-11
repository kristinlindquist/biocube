import { camelCase, get } from 'lodash';

const getFilter = ({ dimension, operator, values }) =>
  `${dimension} ${operator} (${values.map((v) => `'${v}'`).join(',')})`;

// handling the aggregation instead of via cubejs 'type', so as to avoid
// the syntax error cubejs generates when filters are used.
const getValue = (m, CUBE, type) =>
  type
    ? `stddev_samp(${CUBE}.value)`
    : `${camelCase(m.recipe.aggregation || 'avg').toLowerCase()}(${CUBE}.${
        m.recipe.sql || 'value'
      })`;

export const getMeasures = (measures, type = null) =>
  measures
    .filter((m) => m.status !== 'DRAFT' && m.recipe)
    .map((m) => ({
      [`${camelCase(m.name)}${type ? type : ''}`]: {
        sql: (CUBE, ConcurrentState) =>
          `${getValue(m, CUBE, type)} filter (where ${CUBE}."measureId" in (${[
            m.id,
            ...(m.components || []).map((c) => c.id),
          ].join(', ')}) AND ${[
            ...(m.recipe.filters || []),
            ...(m.components || []).flatMap((c) => c.filters || []),
          ]
            .map((f) =>
              !f.join || f.join === 'ConcurrentState'
                ? `${ConcurrentState}.${getFilter(f)}`
                : `${CUBE}.${getFilter(f)}`,
            )
            .join(' AND ')})`,
        meta: type
          ? {
              ...(get(m, 'reports.0.meta') || {}),
              chartType: get(m, 'reports.0.chartType') || 'line',
            }
          : undefined,
        title: `${m.name}${type ? ` ${type}` : ''}`,
        type: `number`,
      },
    }))
    .reduce((a, b) => Object.assign(a, b));
