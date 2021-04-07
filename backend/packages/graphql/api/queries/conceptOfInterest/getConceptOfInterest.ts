import { gql } from 'apollo-server-express';

const getConceptOfInterest = gql`
  query getConceptOfInterest($input: GetConceptOfInterestInput!) {
    getConceptOfInterest(input: $input) {
    	conceptOfInterest {
	      id
	      description
	      name
	    }
    }
  }
`;

export default getConceptOfInterest;
