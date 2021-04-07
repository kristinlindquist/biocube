import { gql } from 'apollo-server-express';

const upsertConceptOfInterest = gql`
  mutation upsertConceptOfInterest($input: UpsertConceptOfInterestInput!) {
    upsertConceptOfInterest(input: $input) {
      conceptOfInterest {
        id
        description
        name
      }
    }
  }
`;

export default upsertConceptOfInterest;
