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
          id
          description
          name
          url
        }
        description
        indications {
          name
        }
        name
        url
      }
    }
  }
`;

export default getMeasure;
