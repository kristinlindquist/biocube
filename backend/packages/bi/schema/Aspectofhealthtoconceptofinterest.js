cube(`Aspectofhealthtoconceptofinterest`, {
  sql: `SELECT * FROM public."_AspectOfHealthToConceptOfInterest"`,
  
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
