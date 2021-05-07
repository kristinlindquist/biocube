import { gql } from 'apollo-server-express';

const upsertDashboardGraph = gql`
  mutation upsertDashboardGraph($input: UpsertDashboardGraphInput!) {
    upsertDashboardGraph(input: $input) {
      dashboardGraph {
        id
        description
        name
        layout
        vizState
      }
    }
  }
`;

export default upsertDashboardGraph;
