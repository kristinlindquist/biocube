import { gql } from 'apollo-server-express';

const getDaily = gql`
  query getDaily($input: GetDailyInput!) {
    getDaily(input: $input) {
      daily {
        date
        heartRate {
          average
          min
          max
        }
      }
    }
  }
`;

export default getDaily;
