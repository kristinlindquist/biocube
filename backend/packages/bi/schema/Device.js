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
      drillMembers: [name, id]
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
    }
  },
  
  dataSource: `default`
});
