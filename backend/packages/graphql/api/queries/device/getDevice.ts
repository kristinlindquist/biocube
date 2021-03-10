import { gql } from 'apollo-server-express';

const getDevice = gql`
  query getDevice($input: GetDeviceInput!) {
    getDevice(input: $input) {
      device {
        id
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
