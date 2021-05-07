import { gql } from 'apollo-server-express';

const upsertMeasure = gql`
  mutation upsertMeasure($input: UpsertMeasureInput!) {
    upsertMeasure(input: $input) {
      measure {
        id
        abbreviation
        components {
          id
          description
          name
        }
        conceptsOfInterest {
          id
          description
          name
        }
        description
        indications {
          id
          description
          name
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

export default upsertMeasure;
