cube(`ConceptOfInterest`, {
  sql: `SELECT * FROM public."ConceptOfInterest"`,

  joins: {},

  measures: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    name: {
      sql: `name`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
