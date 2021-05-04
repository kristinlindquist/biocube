import { gql } from 'apollo-server-express';

const getConceptOfInterest = gql`
  query getConceptOfInterest($input: GetConceptOfInterestInput!) {
    getConceptOfInterest(input: $input) {
      conceptOfInterest {
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

export default getConceptOfInterest;
