import { DashboardGraph } from '@prisma/client';
import {
  Parent,
  Context,
  QueryGetDashboardGraphArgs,
  GetDashboardGraphInput,
  GetDashboardGraphResult,
} from '../../../../types';

async function getDashboardGraph(
  _: Parent,
  args: QueryGetDashboardGraphArgs,
  context: Context,
): Promise<GetDashboardGraphResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetDashboardGraphInput = input;

  const dashboardGraph: DashboardGraph | null = await prisma.dashboardGraph.findUnique(
    { where: { id } },
  );

  return { dashboardGraph };
}

export default getDashboardGraph;
