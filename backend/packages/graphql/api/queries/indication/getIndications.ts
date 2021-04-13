import { gql } from 'apollo-server-express';

const getIndications = gql`
  query getIndications($input: GetIndicationsInput!) {
    getIndications(input: $input) {
      indications {
        id
        description
        name
        url
      }
    }
  }
`;

export default getIndications;
