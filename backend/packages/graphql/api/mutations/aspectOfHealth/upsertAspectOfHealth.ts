import { gql } from 'apollo-server-express';

const upsertAspectOfHealth = gql`
  mutation upsertAspectOfHealth($input: UpsertAspectOfHealthInput!) {
    upsertAspectOfHealth(input: $input) {
      aspectOfHealth {
        id
        conceptsOfInterest {
          id
          description
          name
        }
        indications {
          id
          description
          name
        }
        description
        name
      }
    }
  }
`;

export default upsertAspectOfHealth;
