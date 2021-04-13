import { gql } from 'apollo-server-express';

const getDataType = gql`
  query getDataType($input: GetDataTypeInput!) {
    getDataType(input: $input) {
      dataType {
        id
        description
        deviceTypes {
          id
          name
          description
        }
        name
        url
      }
    }
  }
`;

export default getDataType;
