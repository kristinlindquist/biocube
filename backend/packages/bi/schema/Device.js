cube(`Device`, {
  sql: `SELECT * FROM public."Device"`,
  
  joins: {
    DeviceType: {
      sql: `${CUBE}."deviceTypeId" = ${DeviceType}.id`,
      relationship: `belongsTo`
    },
    
    User: {
      sql: `${CUBE}."userId" = ${User}.id`,
      relationship: `belongsTo`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id, createdat, updatedat]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
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
    
    updatedat: {
      sql: `${CUBE}."updatedAt"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
