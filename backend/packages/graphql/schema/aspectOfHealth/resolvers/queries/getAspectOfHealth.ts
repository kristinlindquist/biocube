import { AspectOfHealth } from '@prisma/client';
import {
  Parent,
  Context,
  QueryGetAspectOfHealthArgs,
  GetAspectOfHealthInput,
  GetAspectOfHealthResult,
} from '../../../../types';

async function getAspectOfHealth(
  _: Parent,
  args: QueryGetAspectOfHealthArgs,
  context: Context,
): Promise<GetAspectOfHealthResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetAspectOfHealthInput = input;

  const aspectOfHealth: AspectOfHealth | null = await prisma.aspectOfHealth.findUnique(
    { where: { id } },
  );

  return { aspectOfHealth };
}

export default getAspectOfHealth;
