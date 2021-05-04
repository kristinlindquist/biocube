import { gql } from 'apollo-server-express';

const deleteAspectOfHealth = gql`
  mutation deleteAspectOfHealth($input: DeleteAspectOfHealthInput!) {
    deleteAspectOfHealth(input: $input) {
      aspectOfHealth {
        id
      }
    }
  }
`;

export default deleteAspectOfHealth;
