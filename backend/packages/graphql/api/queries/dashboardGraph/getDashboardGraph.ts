import { gql } from 'apollo-server-express';

const getDashboardGraph = gql`
  query getDashboardGraph($input: GetDashboardGraphInput!) {
    getDashboardGraph(input: $input) {
      dashboardGraph {
        id
        name
        layout
        vizState
      }
    }
  }
`;

export default getDashboardGraph;
