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
  const { aspectsOfHealth, measures } = inputConceptOfInterest;

  let conceptOfInterest: ConceptOfInterest | null = null;
  const aohIds = (aspectsOfHealth || []).map(({ id }) => ({ id }));
  const mIds = (measures || []).map(({ id }) => ({ id }));

  const getKey = isUpdate => (isUpdate ? 'set' : 'connect');
  const getData = (isUpdate = false) => {
    const key = getKey(isUpdate);
    return {
      ...omit(inputConceptOfInterest, ['id', 'url']),
      aspectsOfHealth: { [key]: aohIds },
      measures: { [key]: mIds },
    };
  };

  if (!inputConceptOfInterest.id) {
    conceptOfInterest = await prisma.conceptOfInterest.create({
      data: getData(),
    });
  } else {
    conceptOfInterest = await prisma.conceptOfInterest.update({
      where: {
        id: inputConceptOfInterest.id,
      },
      data: getData(true),
    });
  }

  return { conceptOfInterest };
}

export default upsertConceptOfInterest;
