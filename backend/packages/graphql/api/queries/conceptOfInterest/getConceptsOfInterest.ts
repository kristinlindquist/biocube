import { gql } from 'apollo-server-express';

const getConceptsOfInterest = gql`
  query getConceptsOfInterest($input: GetConceptsOfInterestInput!) {
    getConceptsOfInterest(input: $input) {
      conceptsOfInterest {
        id
        aspectsOfHealth {
          id
          description
          name
          url
        }
        description
        measures {
          id
          description
          name
          url
        }
        name
        url
      }
    }
  }
`;

export default getConceptsOfInterest;
