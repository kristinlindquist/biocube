cube(`Componenttopage`, {
  sql: `SELECT * FROM public."_ComponentToPage"`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    
  },
  
  dataSource: `default`
});
