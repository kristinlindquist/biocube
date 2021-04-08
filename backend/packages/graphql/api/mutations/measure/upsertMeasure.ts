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

export default upsertMeasure;
