cube(`Measure`, {
  sql: `SELECT * FROM public."Measure"`,

  joins: {
    Data: {
      sql: `${DataType}."id" = ${Data}.dataTypeId`,
      relationship: `hasMany`,
    },
    DataType: {
      sql: `${CUBE}."id" = ${MeasureProcess}.measureId`,
      relationship: `hasMany`,
    }
  },

  measures: {},

  dimensions: {
    abbreviation: {
      sql: `abbreviation`,
      type: `string`,
    },

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
