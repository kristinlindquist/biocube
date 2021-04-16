cube(`Indication`, {
  sql: `SELECT * FROM public."Indication"`,

  joins: {},

  measures: {},

  dimensions: {
    abbreviation: {
      sql: `abbreviation`,
      type: `string`,
    },

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
