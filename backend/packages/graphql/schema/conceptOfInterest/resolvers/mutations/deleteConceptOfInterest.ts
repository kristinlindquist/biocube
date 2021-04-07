import { ConceptOfInterest } from '@prisma/client';
import {
  Parent,
  Context,
  MutationDeleteConceptOfInterestArgs,
  DeleteConceptOfInterestInput,
  DeleteConceptOfInterestResult,
} from '../../../../types';

async function deleteConceptOfInterest(
  _: Parent,
  args: MutationDeleteConceptOfInterestArgs,
  context: Context,
): Promise<DeleteConceptOfInterestResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: DeleteConceptOfInterestInput = input;

  const conceptOfInterest: ConceptOfInterest = await prisma.conceptOfInterest.delete({
    where: {
      id,
    },
  });

  return { conceptOfInterest };
}

export default deleteConceptOfInterest;
