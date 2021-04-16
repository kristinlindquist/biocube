cube(`DeviceType`, {
  sql: `SELECT * FROM public."DeviceType"`,

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
