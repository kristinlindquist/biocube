import { gql } from 'apollo-server-express';

const upsertMeasure = gql`
  mutation upsertMeasure($input: UpsertMeasureInput!) {
    upsertMeasure(input: $input) {
      measure {
        id
        aggregation
        conceptsOfInterest {
          id
          name
        }
        components {
          id
        }
        dataTypes {
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
        status
        sql
        url
      }
    }
  }
`;

export default upsertMeasure;
