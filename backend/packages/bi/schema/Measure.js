cube(`Measure`, {
  sql: `SELECT * FROM public."Measure"`,

  joins: {
    MeasureComponent: {
      sql: `${CUBE}."id" = ${MeasureComponent}.measureId`,
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
