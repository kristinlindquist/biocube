cube(`Data`, {
  sql: `SELECT * FROM public."Datum" where state is null`,

  joins: {
    Device: {
      sql: `${CUBE}."deviceId" = ${Device}.id`,
      relationship: `belongsTo`,
    },

    DataType: {
      sql: `${CUBE}."dataTypeId" = ${DataType}.id`,
      relationship: `belongsTo`,
    },

    State: {
      sql: `${Data}."startedAt" > ${State}."startedAt" AND ${Data}."startedAt" < ${State}."startedAt" + interval '1 hour' * ${State}.duration / (1000 * 60 * 60)`,
      relationship: `hasMany`,
    },
  },

  measures: {
    count: {
      type: `count`,
      drillMembers: [id, startedAt],
    },

    value: {
      sql: `value`,
      type: `sum`,
    },

    duration: {
      sql: `duration`,
      type: `sum`,
    },

    average: {
      sql: `value`,
      type: `avg`,
    }
  },

  dimensions: {
    state: {
      sql: `${State}.state`,
      type: `string`,
    },

    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    startedAt: {
      sql: `${CUBE}."startedAt"`,
      type: `time`,
    },
  },

  segments: {
    heartRate: {
      sql: `${DataType}.abbreviation = 'bpm'`,
    }
  },

  dataSource: `default`,
});
