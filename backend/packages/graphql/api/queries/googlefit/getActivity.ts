import { gql } from 'apollo-server-express';

const getActivity = gql`
  query getActivity($input: GetActivityInput!) {
    getActivity(input: $input) {
      activity {
        start
        end
        duration
        state
      }
    }
  }
`;

export default getActivity;
