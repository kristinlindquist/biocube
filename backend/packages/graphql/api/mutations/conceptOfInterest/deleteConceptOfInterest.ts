import { gql } from 'apollo-server-express';

const deleteConceptOfInterest = gql`
  mutation deleteConceptOfInterest($input: DeleteConceptOfInterestInput!) {
    deleteConceptOfInterest(input: $input) {
      conceptOfInterest {
        id
      }
    }
  }
`;

export default deleteConceptOfInterest;
