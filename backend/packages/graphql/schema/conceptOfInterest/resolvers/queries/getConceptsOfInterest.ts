import { ConceptOfInterest } from '@prisma/client';
import {
  Parent,
  Context,
  GetConceptsOfInterestResult,
} from '../../../../types';

async function getConceptsOfInterest(
  _: Parent,
  __,
  context: Context,
): Promise<GetConceptsOfInterestResult> {
  const { prisma } = context;

  const conceptsOfInterest: ConceptOfInterest[] = await prisma.conceptOfInterest.findMany();

  return { conceptsOfInterest };
}

export default getConceptsOfInterest;
