cube(`DataType`, {
  sql: `SELECT * FROM public."DataType"`,

  joins: {
    Data: {
      sql: `${CUBE}.id = ${Data}."dataTypeId"`,
      relationship: `hasMany`,
    },
    MeasureProcess: {
      sql: `${CUBE}.id = ${MeasureProcess}."dataTypeId"`,
      relationship: `hasMany`,
    }
  },

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
