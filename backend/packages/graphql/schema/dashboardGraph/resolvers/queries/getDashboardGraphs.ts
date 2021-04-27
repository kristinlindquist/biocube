import { DashboardGraph } from '@prisma/client';
import {
  Parent,
  Context,
  GetDashboardGraphsResult,
} from '../../../../types';

async function getDashboardGraphs(
  _: Parent,
  __,
  context: Context,
): Promise<GetDashboardGraphsResult> {
  const { prisma } = context;

  const dashboardGraphs: DashboardGraph[] = await prisma.dashboardGraph.findMany();

  return { dashboardGraphs };
}

export default getDashboardGraphs;
