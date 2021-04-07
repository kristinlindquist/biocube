import { ConceptOfInterest } from '@prisma/client';
import {
  Parent,
  Context,
  MutationUpsertConceptOfInterestArgs,
  UpsertConceptOfInterestInput,
  UpsertConceptOfInterestResult,
} from '../../../../types';
import { omit } from 'lodash';

async function upsertConceptOfInterest(
  _: Parent,
  args: MutationUpsertConceptOfInterestArgs,
  context: Context,
): Promise<UpsertConceptOfInterestResult> {
  const { prisma } = context;
  const { input } = args;
  const inputConceptOfInterest: UpsertConceptOfInterestInput = input;

  let conceptOfInterest: ConceptOfInterest | null = null;

  if (!inputConceptOfInterest.id) {
    conceptOfInterest = await prisma.conceptOfInterest.create({
      data: {
        ...omit(inputConceptOfInterest, 'id'),
      },
    });
  } else {
    conceptOfInterest = await prisma.conceptOfInterest.update({
      where: {
        id: inputConceptOfInterest.id,
      },
      data: {
        ...omit(inputConceptOfInterest, 'id'),
      },
    });
  }

  return { conceptOfInterest };
}

export default upsertConceptOfInterest;
