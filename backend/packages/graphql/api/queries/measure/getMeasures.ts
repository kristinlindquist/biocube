import { gql } from 'apollo-server-express';

const getMeasures = gql`
  query getMeasures($input: GetMeasuresInput!) {
    getMeasures(input: $input) {
      measures {
        id
        abbreviation
        components {
          id
          description
          name
        }
        conceptsOfInterest {
          id
          name
        }
        description
        indications {
          id
          name
          url
        }
        name
        status
        url
      }
    }
  }
`;

export default getMeasures;
