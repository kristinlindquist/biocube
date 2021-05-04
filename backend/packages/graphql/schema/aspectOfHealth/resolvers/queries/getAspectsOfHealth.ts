import { AspectOfHealth } from '@prisma/client';
import {
  Parent,
  Context,
  GetAspectsOfHealthResult,
} from '../../../../types';

async function getAspectsOfHealth(
  _: Parent,
  __,
  context: Context,
): Promise<GetAspectsOfHealthResult> {
  const { prisma } = context;

  const aspectsOfHealth: AspectOfHealth[] = await prisma.aspectOfHealth.findMany();

  return { aspectsOfHealth };
}

export default getAspectsOfHealth;
