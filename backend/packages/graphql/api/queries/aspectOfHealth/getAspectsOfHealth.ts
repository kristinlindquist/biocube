import { gql } from 'apollo-server-express';

const getAspectsOfHealth = gql`
  query getAspectsOfHealth($input: GetAspectsOfHealthInput!) {
    getAspectsOfHealth(input: $input) {
      aspectsOfHealth {
        id
        conceptsOfInterest {
          id
          description
          name
        }
        indications {
          id
          name
          description
        }
        description
        name
      }
    }
  }
`;

export default getAspectsOfHealth;
