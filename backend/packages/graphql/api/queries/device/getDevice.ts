import { gql } from 'apollo-server-express';

const getDevice = gql`
  query getDevice($input: GetDeviceInput!) {
    getDevice(input: $input) {
      post {
        id
        createdAt
        updatedAt
        userId
        name
        user {
          id
        }
      }
    }
  }
`;

export default getDevice;
