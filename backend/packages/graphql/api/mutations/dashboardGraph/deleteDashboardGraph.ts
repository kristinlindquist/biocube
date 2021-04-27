import { gql } from 'apollo-server-express';

const deleteDashboardGraph = gql`
  mutation deleteDashboardGraph($input: DeleteDashboardGraphInput!) {
    deleteDashboardGraph(input: $input) {
      dashboardGraph {
        id
      }
    }
  }
`;

export default deleteDashboardGraph;
