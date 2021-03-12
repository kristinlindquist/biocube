import { gql } from 'apollo-server-express';

const getMeasures = gql`
  query getMeasures($input: GetMeasuresInput!) {
    getMeasures(input: $input) {
      measures {
        id
        description
        name
      }
    }
  }
`;

export default getMeasures;
