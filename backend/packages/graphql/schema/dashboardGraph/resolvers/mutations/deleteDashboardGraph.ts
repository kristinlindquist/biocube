import { DashboardGraph } from '@prisma/client';
import {
  Parent,
  Context,
  MutationDeleteDashboardGraphArgs,
  DeleteDashboardGraphInput,
  DeleteDashboardGraphResult,
} from '../../../../types';

async function deleteDashboardGraph(
  _: Parent,
  args: MutationDeleteDashboardGraphArgs,
  context: Context,
): Promise<DeleteDashboardGraphResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: DeleteDashboardGraphInput = input;

  const dashboardGraph: DashboardGraph = await prisma.dashboardGraph.delete({
    where: {
      id,
    },
  });

  return { dashboardGraph };
}

export default deleteDashboardGraph;
