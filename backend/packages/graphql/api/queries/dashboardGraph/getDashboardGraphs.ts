import { gql } from 'apollo-server-express';

const getDashboardGraphs = gql`
  query getDashboardGraphs($input: GetDashboardGraphsInput!) {
    getDashboardGraphs(input: $input) {
      dashboardGraphs {
        id
        description
        name
        layout
        vizState
      }
    }
  }
`;

export default getDashboardGraphs;
