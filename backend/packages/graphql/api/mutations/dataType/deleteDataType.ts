import { gql } from 'apollo-server-express';

const deleteDataType = gql`
  mutation deleteDataType($input: DeleteDataTypeInput!) {
    deleteDataType(input: $input) {
      dataType {
        id
      }
    }
  }
`;

export default deleteDataType;
