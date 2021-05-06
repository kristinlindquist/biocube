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
          name
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

export default upsertMeasure;
