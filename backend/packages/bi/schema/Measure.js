cube(`Measure`, {
  sql: `SELECT * FROM public."Measure"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, id]
    }
  },
  
  dimensions: {
    abbreviation: {
      sql: `abbreviation`,
      type: `string`
    },
    
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
