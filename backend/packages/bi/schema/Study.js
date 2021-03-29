cube(`Study`, {
  sql: `SELECT * FROM public."Study"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id, title, createdat, updatedat]
    }
  },
  
  dimensions: {
    abstract: {
      sql: `abstract`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    authors: {
      sql: `authors`,
      type: `string`
    },
    
    title: {
      sql: `title`,
      type: `string`
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
