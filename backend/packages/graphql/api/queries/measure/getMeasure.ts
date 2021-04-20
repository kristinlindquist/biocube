import { gql } from 'apollo-server-express';

const getMeasure = gql`
  query getMeasure($input: GetMeasureInput!) {
    getMeasure(input: $input) {
      measure {
        id
        conceptsOfInterest {
          id
          name
        }
        components {
          id
          dataType {
            id
            name
          }
          description
          filters {
            dimension
            operator
            values
          }
        }
        dataTypes {
          id
          description
          name
          url
        }
        description
        indications {
          id
          name
          url
        }
        name
        status
        url
      }
    }
  }
`;

export default getMeasure;
