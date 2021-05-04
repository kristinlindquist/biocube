import { gql } from 'apollo-server-express';

const getAspectOfHealth = gql`
  query getAspectOfHealth($input: GetAspectOfHealthInput!) {
    getAspectOfHealth(input: $input) {
      aspectOfHealth {
        id
        conceptsOfInterest {
          id
          name
          description
          url
        }
        indications {
          id
          name
          description
          url
        }
        description
        name
        url
      }
    }
  }
`;

export default getAspectOfHealth;
