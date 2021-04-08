import { gql } from 'apollo-server-express';

const getMeasures = gql`
  query getMeasures($input: GetMeasuresInput!) {
    getMeasures(input: $input) {
      measures {
        id
        conceptsOfInterest {
          id
          name
        }
        dataTypes {
          id
          name
        }
        description
        indications {
          id
          name
        }
        name
      }
    }
  }
`;

export default getMeasures;
