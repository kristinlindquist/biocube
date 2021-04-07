import { gql } from 'apollo-server-express';

const getConceptsOfInterest = gql`
  query getConceptsOfInterest($input: GetConceptsOfInterestInput!) {
    getConceptsOfInterest(input: $input) {
      conceptsOfInterest {
        id
        description
        name
      }
    }
  }
`;

export default getConceptsOfInterest;
