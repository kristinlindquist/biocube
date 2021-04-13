import { gql } from 'apollo-server-express';

const getIndication = gql`
  query getIndication($input: GetIndicationInput!) {
    getIndication(input: $input) {
      indication {
        id
        description
        measures {
          id
          name
          description
          url
        }
        name
        url
      }
    }
  }
`;

export default getIndication;
