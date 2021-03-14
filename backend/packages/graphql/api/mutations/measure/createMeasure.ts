import { gql } from 'apollo-server-express';

const createMeasure = gql`
  mutation createMeasure($input: CreateMeasureInput!) {
    createMeasure(input: $input) {
    	measure {
	      id
	      conceptsOfInterest {
	      	name
	      }
	      description
	      name
	      indications {
	      	name
	      }
	    }
    }
  }
`;

export default createMeasure;