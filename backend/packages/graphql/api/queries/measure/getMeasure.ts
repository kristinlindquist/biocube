import { gql } from 'apollo-server-express';

const getMeasure = gql`
  query getMeasure($input: GetMeasureInput!) {
    getMeasure(input: $input) {
    	measure {
	      id
	      description
	      name
	      intervention {
	      	name
	      }
	    }
    }
  }
`;

export default getMeasure;