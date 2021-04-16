cube(`User`, {
  sql: `SELECT * FROM public."User"`,

  joins: {},

  measures: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },
  },

  dataSource: `default`,
});
