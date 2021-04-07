import { gql } from 'apollo-server-express';

const getMeasures = gql`
  query getMeasures($input: GetMeasuresInput!) {
    getMeasures(input: $input) {
      measures {
        id
        conceptsOfInterest {
          id
          name
        }
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

export default getMeasures;
