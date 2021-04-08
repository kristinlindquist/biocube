import { gql } from 'apollo-server-express';

const getMeasure = gql`
  query getMeasure($input: GetMeasureInput!) {
    getMeasure(input: $input) {
      measure {
        id
        conceptsOfInterest {
          name
        }
        dataTypes {
          name
        }
        description
        indications {
          name
        }
        name
      }
    }
  }
`;

export default getMeasure;
