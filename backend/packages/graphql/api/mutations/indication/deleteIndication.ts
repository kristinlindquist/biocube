import { gql } from 'apollo-server-express';

const deleteIndication = gql`
  mutation deleteIndication($input: DeleteIndicationInput!) {
    deleteIndication(input: $input) {
      indication {
        id
      }
    }
  }
`;

export default deleteIndication;
