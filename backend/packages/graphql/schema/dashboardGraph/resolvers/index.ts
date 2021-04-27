import { DashboardGraph } from './types';
import { getDashboardGraphs, getDashboardGraph } from './queries';
import { deleteDashboardGraph, upsertDashboardGraph } from './mutations';

const resolvers = {
  Query: {
    getDashboardGraphs,
    getDashboardGraph
  },
  Mutation: {
    deleteDashboardGraph,
    upsertDashboardGraph
  },
  DashboardGraph
};

export default resolvers;
