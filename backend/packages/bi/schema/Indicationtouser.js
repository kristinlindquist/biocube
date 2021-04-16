cube(`IndicationToUser`, {
  sql: `SELECT * FROM public."_IndicationToUser"`,

  joins: {
    Indication: {
      sql: `${CUBE}."A" = ${Indication}.id`,
      relationship: `hasOne`,
    },
    User: {
      sql: `${CUBE}."B" = ${User}.id`,
      relationship: `hasOne`,
    },
  },

  measures: {},

  dimensions: {
    id: {
      sql: `${CUBE}.A || '-' || ${CUBE}.B`,
      type: `string`,
      primaryKey: true,
      shown: false,
    }
  },

  dataSource: `default`,
});
