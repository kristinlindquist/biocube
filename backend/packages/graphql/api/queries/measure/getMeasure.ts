import { gql } from 'apollo-server-express';

const getMeasure = gql`
  query getMeasure($input: GetMeasureInput!) {
    getMeasure(input: $input) {
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

export default getMeasure;
