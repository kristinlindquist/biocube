cube(`Measure`, {
  sql: `SELECT * FROM public."Measure"`,

  joins: {
    MeasureProcess: {
      sql: `${CUBE}."id" = ${MeasureProcess}.measureId`,
      relationship: `hasMany`,
    }
  },

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
