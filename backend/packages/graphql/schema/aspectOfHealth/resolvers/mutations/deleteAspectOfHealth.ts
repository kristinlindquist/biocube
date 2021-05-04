import { AspectOfHealth } from '@prisma/client';
import {
  Parent,
  Context,
  MutationDeleteAspectOfHealthArgs,
  DeleteAspectOfHealthInput,
  DeleteAspectOfHealthResult,
} from '../../../../types';

async function deleteAspectOfHealth(
  _: Parent,
  args: MutationDeleteAspectOfHealthArgs,
  context: Context,
): Promise<DeleteAspectOfHealthResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: DeleteAspectOfHealthInput = input;

  const aspectOfHealth: AspectOfHealth = await prisma.aspectOfHealth.delete({
    where: {
      id,
    },
  });

  return { aspectOfHealth };
}

export default deleteAspectOfHealth;
