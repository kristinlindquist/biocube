import { gql } from 'apollo-server-express';

const upsertMeasure = gql`
  mutation upsertMeasure($input: UpsertMeasureInput!) {
    upsertMeasure(input: $input) {
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

export default upsertMeasure;
