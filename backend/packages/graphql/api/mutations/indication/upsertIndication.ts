import { gql } from 'apollo-server-express';

const upsertIndication = gql`
  mutation upsertIndication($input: UpsertIndicationInput!) {
    upsertIndication(input: $input) {
      indication {
        id
        description
        measures {
          id
        }
        name
      }
    }
  }
`;

export default upsertIndication;
