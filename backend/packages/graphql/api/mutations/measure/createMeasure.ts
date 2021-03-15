import { gql } from 'apollo-server-express';

const createMeasure = gql`
  mutation createMeasure($input: CreateMeasureInput!) {
    createMeasure(input: $input) {
    	measure {
	      id
	      description
	      name
	      indications {
	      	id
	      	name
	      }
	    }
    }
  }
`;

export default createMeasure;