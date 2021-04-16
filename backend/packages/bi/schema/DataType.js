cube(`DataType`, {
  sql: `SELECT * FROM public."DataType"`,

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
