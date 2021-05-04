cube(`ConcurrentState`, {
  sql: `SELECT * FROM public."Datum" where state is not null`,
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    state: {
      sql: `state`,
      type: `string`,
      // subQuery: true,
      // propagateFiltersToSubQuery: true
    },
  },
  
  dataSource: `default`
});