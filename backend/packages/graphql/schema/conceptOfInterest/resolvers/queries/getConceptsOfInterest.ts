import { ConceptOfInterest } from '@prisma/client';
import {
  Parent,
  Context,
  QueryGetConceptsOfInterestArgs,
  GetConceptsOfInterestResult,
} from '../../../../types';

async function getConceptsOfInterest(
  _: Parent,
  args: QueryGetConceptsOfInterestArgs,
  context: Context,
): Promise<GetConceptsOfInterestResult> {
  const { prisma } = context;
  const { input } = args;

  console.log(input);

  const conceptsOfInterest: ConceptOfInterest[] = await prisma.conceptOfInterest.findMany();

  return { conceptsOfInterest };
}

export default getConceptsOfInterest;
