import { DashboardGraph } from '@prisma/client';
import {
  Parent,
  Context,
  MutationUpsertDashboardGraphArgs,
  UpsertDashboardGraphInput,
  UpsertDashboardGraphResult,
} from '../../../../types';
import { omit } from 'lodash';

async function upsertDashboardGraph(
  _: Parent,
  args: MutationUpsertDashboardGraphArgs,
  context: Context,
): Promise<UpsertDashboardGraphResult> {
  const { prisma } = context;
  const { input } = args;
  const inputDashboardGraph: UpsertDashboardGraphInput = input;

  let dashboardGraph: DashboardGraph | null = null;

  if (!inputDashboardGraph.id) {
    dashboardGraph = await prisma.dashboardGraph.create({
      data: {
        ...omit(inputDashboardGraph, 'id'),
      },
    });
  } else {
    dashboardGraph = await prisma.dashboardGraph.update({
      where: {
        id: inputDashboardGraph.id,
      },
      data: {
        ...omit(inputDashboardGraph, 'id'),
      },
    });
  }

  return { dashboardGraph };
}

export default upsertDashboardGraph;
