import { camelCase, get } from 'lodash';
import fetch from 'node-fetch';

const iQuery = {
  variables: {
    input: {},
  },
  query: `query getIndications($input: GetIndicationsInput!) {
    getIndications(input: $input) {
      indications {
        id
        name
      }
    }
  }`,
};

asyncModule(async () => {
  const indications = get(
    await (
      await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(iQuery),
      })
    ).json(),
    'data.getIndications.indications',
  );

  cube(`User`, {
    sql: `SELECT * FROM public."User"`,
    title: `Patients`,

    joins: {
      IndicationToUser: {
        sql: `${CUBE}.id = ${IndicationToUser}."B"`,
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
    },

    segments: indications
      .map(i => ({
        [camelCase(`With${i.name}`)]: {
          sql: `${Indication}.id = '${i.id}'`,
        },
      }))
      .reduce((a, b) => Object.assign(a, b)),

    dataSource: `default`,
  });
});
