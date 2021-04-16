cube(`MeasureProcess`, {
  sql: `SELECT * FROM public."MeasureProcess"`,
  
  joins: {
    DataType: {
      sql: `${CUBE}."dataTypeId" = ${DataType}.id`,
      relationship: `hasOne`,
    },
    Measure: {
      sql: `${CUBE}."measureId" = ${Measure}.id`,
      relationship: `hasOne`,
    }
  },

  dimensions: {
    dataTypeId: {
      sql: `dataTypeId`,
      type: `number`
    },

    measureId: {
      sql: `id`,
      type: `number`
    }
  },
  
  dataSource: `default`
});