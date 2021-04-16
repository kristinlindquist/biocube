cube(`Data`, {
  sql: `SELECT * FROM public."Datum"`,

  joins: {
    DataType: {
      sql: `${CUBE}."dataTypeId" = ${DataType}.id`,
      relationship: `belongsTo`,
    },

    Device: {
      sql: `${CUBE}."deviceId" = ${Device}.id`,
      relationship: `belongsTo`,
    },

    Measure: {
      sql: `${CUBE}."dataTypeId" = ${MeasureProcess}.dataTypeId`,
      relationship: `hasMany`,
    },

    State: {
      sql: `${Data}."startedAt" > ${State}."startedAt" AND ${Data}."startedAt" < ${State}."startedAt" + interval '1 hour' * ${State}.duration / (1000 * 60 * 60)`,
      relationship: `hasMany`,
    },
  },

  measures: {
    average: {
      sql: `value`,
      type: `avg`,
    },

    duration: {
      sql: `duration`,
      type: `sum`,
    },

    value: {
      sql: `value`,
      type: `sum`,
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    measure: {
      sql: `${Measure}.name`,
      type: `string`,
    },

    startedAt: {
      sql: `${CUBE}."startedAt"`,
      type: `time`,
    },

    state: {
      sql: `${State}.state`,
      type: `string`,
    }
  },

  segments: {
    heartRate: {
      sql: `${DataType}.abbreviation = 'bpm'`,
    }
  },

  dataSource: `default`,
});
