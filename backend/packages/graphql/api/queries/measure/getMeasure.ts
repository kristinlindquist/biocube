import { gql } from 'apollo-server-express';

const getMeasure = gql`
  query getMeasure($input: GetMeasureInput!) {
    getMeasure(input: $input) {
      measure {
        id
        abbreviation
        components {
          id
          description
          name
          recipe {
            id
            aggregation
            filters {
              id
              dimension
              join
              operator
              values
            }
            sql
          }
        }
        conceptsOfInterest {
          id
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
        recipe {
          id
          aggregation
          filters {
            id
            dimension
            join
            operator
            values
          }
          sql
        }
        reports {
          id
          chartType
          meta
        }
        questions {
          id
          answers {
            id
            text
            value
          }
          description
          text
        }
        status
        url
      }
    }
  }
`;

export default getMeasure;
