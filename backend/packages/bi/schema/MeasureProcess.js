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
    id: {
      sql: `${CUBE}.measureId || '-' || ${CUBE}.dataTypeId`,
      type: `string`,
      primaryKey: true,
      shown: false,
    }
  },
  
  dataSource: `default`
});