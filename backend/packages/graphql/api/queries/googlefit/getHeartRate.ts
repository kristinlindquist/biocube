import { gql } from 'apollo-server-express';

const getHeartRate = gql`
  query getHeartRate($input: GetHeartRateInput!) {
    getHeartRate(input: $input) {
      heartRate {
        date
        point
      }
    }
  }
`;

export default getHeartRate;
