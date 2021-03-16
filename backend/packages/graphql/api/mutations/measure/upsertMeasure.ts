import { gql } from 'apollo-server-express';

const upsertMeasure = gql`
  mutation upsertMeasure($input: UpsertMeasureInput!) {
    upsertMeasure(input: $input) {
      measure {
        id
        description
        name
        indications {
          id
          name
        }
      }
    }
  }
`;

export default upsertMeasure;
