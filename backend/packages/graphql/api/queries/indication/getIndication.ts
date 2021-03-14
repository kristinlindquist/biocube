import { gql } from 'apollo-server-express';

const getIndication = gql`
  query getIndication($input: GetIndicationInput!) {
    getIndication(input: $input) {
    	indication {
	      id
	      description
	      name
	    }
    }
  }
`;

export default getIndication;
