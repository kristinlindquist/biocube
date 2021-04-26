import { gql } from 'apollo-server-express';

const getMeasure = gql`
  query getMeasure($input: GetMeasureInput!) {
    getMeasure(input: $input) {
      measure {
        id
        aggregation
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
            join
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
        sql
        url
      }
    }
  }
`;

export default getMeasure;
