import { ConceptOfInterest } from '@prisma/client';
import {
  Parent,
  Context,
  QueryGetConceptOfInterestArgs,
  GetConceptOfInterestInput,
  GetConceptOfInterestResult,
} from '../../../../types';

async function getConceptOfInterest(
  _: Parent,
  args: QueryGetConceptOfInterestArgs,
  context: Context,
): Promise<GetConceptOfInterestResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetConceptOfInterestInput = input;

  const conceptOfInterest: ConceptOfInterest | null = await prisma.conceptOfInterest.findUnique(
    { where: { id } },
  );

  return { conceptOfInterest };
}

export default getConceptOfInterest;
