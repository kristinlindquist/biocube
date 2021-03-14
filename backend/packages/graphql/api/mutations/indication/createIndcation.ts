import { gql } from 'apollo-server-express';

const createIndication = gql`
  mutation createIndication($input: CreateIndicationInput!) {
    createIndication(input: $input) {
    	indication {
	      id
	      description
	      name
	    }
    }
  }
`;

export default createIndication;
