cube(`PrismaMigrations`, {
  sql: `SELECT * FROM public._prisma_migrations`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [migrationName, id]
    },
    
    appliedStepsCount: {
      sql: `applied_steps_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    checksum: {
      sql: `checksum`,
      type: `string`
    },
    
    logs: {
      sql: `logs`,
      type: `string`
    },
    
    migrationName: {
      sql: `migration_name`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },
    
    finishedAt: {
      sql: `finished_at`,
      type: `time`
    },
    
    rolledBackAt: {
      sql: `rolled_back_at`,
      type: `time`
    },
    
    startedAt: {
      sql: `started_at`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
