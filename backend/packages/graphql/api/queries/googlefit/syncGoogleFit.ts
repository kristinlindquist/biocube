import { gql } from 'apollo-server-express';

const syncGoogleFit = gql`
  query syncGoogleFit($input: SyncGoogleFitInput!) {
    syncGoogleFit(input: $input) {
      result
    }
  }
`;

export default syncGoogleFit;