cube(`Indicationtomeasure`, {
  sql: `SELECT * FROM public."_IndicationToMeasure"`,
  
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
