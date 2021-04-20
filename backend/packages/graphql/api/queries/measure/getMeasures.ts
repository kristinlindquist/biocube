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
        dataTypes {
          id
          name
          url
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
