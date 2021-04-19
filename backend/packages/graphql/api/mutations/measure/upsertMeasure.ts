import { gql } from 'apollo-server-express';

const upsertMeasure = gql`
  mutation upsertMeasure($input: UpsertMeasureInput!) {
    upsertMeasure(input: $input) {
      measure {
        id
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
        url
      }
    }
  }
`;

export default upsertMeasure;
