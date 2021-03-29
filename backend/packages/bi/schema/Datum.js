cube(`Datum`, {
  sql: `SELECT * FROM public."Datum"`,
  
  joins: {
    Device: {
      sql: `${CUBE}."deviceId" = ${Device}.id`,
      relationship: `belongsTo`
    },
    
    DataType: {
      sql: `${CUBE}."dataTypeId" = ${DataType}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, createdat]
    },
    
    value: {
      sql: `value`,
      type: `sum`
    },
    
    duration: {
      sql: `duration`,
      type: `sum`
    }
  },
  
  dimensions: {
    state: {
      sql: `state`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    startedat: {
      sql: `${CUBE}."startedAt"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
