cube(`Measure`, {
  sql: `SELECT * FROM public."Measure"`,

  measures: {},

  dimensions: {
    name: {
      sql: `name`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },
  },

  dataSource: `default`,
});
