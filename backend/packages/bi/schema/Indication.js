cube(`Indication`, {
  sql: `SELECT * FROM public."Indication"`,

  joins: {
    IndicationToUser: {
      sql: `${CUBE}.id = ${IndicationToUser}."A"`,
      relationship: `hasMany`,
    },
  },

  measures: {},

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },

    name: {
      sql: `name`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
