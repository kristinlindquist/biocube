cube(`Aspectofhealthtoindication`, {
  sql: `SELECT * FROM public."_AspectOfHealthToIndication"`,
  
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
