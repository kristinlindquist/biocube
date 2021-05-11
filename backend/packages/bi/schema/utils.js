import { camelCase, get } from 'lodash';

const getFilter = ({ dimension, operator, values }) =>
  `${dimension} ${operator} (${values.map((v) => `'${v}'`).join(',')})`;

// handling the aggregation instead of via cubejs 'type', so as to avoid
// the syntax error cubejs generates when filters are used.
// example output: avg(value)
const getValue = (recipe, CUBE, type) =>
  type
    ? `stddev_samp(${CUBE}.value)`
    : `${camelCase(recipe.aggregation || 'avg').toLowerCase()}(${CUBE}.${
        recipe.sql || 'value'
      })`;

const getMainSql = ({ components, id, recipe, type }, CUBE) =>
  `${getValue(recipe, CUBE, type)} filter (where ${CUBE}."measureId" in (${[
    id,
    ...(components || []).map((c) => c.id),
  ].join(', ')})`;

const getFilters = (rFilters, components) => [
  ...(rFilters || []),
  ...(components || []).flatMap((c) => c.filters || []),
];

// Get the filtering part of the sql query
const getFilterSql = (
  { components, id, recipe: { filters }, type },
  CUBE,
  ConcurrentState,
) =>
  `${getFilters(filters, components)
    .map((f) =>
      !f.join || f.join === 'ConcurrentState'
        ? `${ConcurrentState}.${getFilter(f)}`
        : `${CUBE}.${getFilter(f)}`,
    )
    .join(' AND ')}`;

// Get the entire sql string (or rather, what cubejs wants for 'sql')
const getSql = (m, CUBE, ConcurrentState) =>
  `${getMainSql(m, CUBE)} AND ${getFilterSql(m, CUBE, ConcurrentState)})`;

export const getMeasures = (measures, type = null) =>
  measures
    .filter((m) => m.status !== 'DRAFT' && m.recipe)
    .map((m) => ({
      [`${camelCase(m.name)}${type ? type : ''}`]: {
        sql: (CUBE, ConcurrentState) => getSql(m, CUBE, ConcurrentState),
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
