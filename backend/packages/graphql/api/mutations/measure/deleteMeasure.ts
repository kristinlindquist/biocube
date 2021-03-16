import { gql } from 'apollo-server-express';

const deleteMeasure = gql`
  mutation deleteMeasure($input: DeleteMeasureInput!) {
    deleteMeasure(input: $input) {
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

export default deleteMeasure;