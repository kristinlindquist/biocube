import { gql } from 'apollo-server-express';

const getSleep = gql`
  query getSleep($input: GetSleepInput!) {
    getSleep(input: $input) {
      sleep {
        start
        end
        state
      }
    }
  }
`;

export default getSleep;
