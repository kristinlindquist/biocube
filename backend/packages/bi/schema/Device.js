cube(`Device`, {
  sql: `SELECT * FROM public."Device"`,

  joins: {
    DeviceType: {
      sql: `${CUBE}."deviceTypeId" = ${DeviceType}.id`,
      relationship: `belongsTo`,
    },

    User: {
      sql: `${CUBE}."userId" = ${User}.id`,
      relationship: `belongsTo`,
    },
  },

  measures: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },
  },

  dataSource: `default`,
});
