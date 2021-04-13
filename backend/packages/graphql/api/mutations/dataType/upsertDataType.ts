import { gql } from 'apollo-server-express';

const upsertDataType = gql`
  mutation upsertDataType($input: UpsertDataTypeInput!) {
    upsertDataType(input: $input) {
      dataType {
        id
        description
        deviceTypes {
          id
          name
          description
        }
        measures {
          id
          name
          description
        }
        name
      }
    }
  }
`;

export default upsertDataType;
