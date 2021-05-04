import { AspectOfHealth } from '@prisma/client';
import {
  Parent,
  Context,
  MutationUpsertAspectOfHealthArgs,
  UpsertAspectOfHealthInput,
  UpsertAspectOfHealthResult,
} from '../../../../types';
import { omit } from 'lodash';

async function upsertAspectOfHealth(
  _: Parent,
  args: MutationUpsertAspectOfHealthArgs,
  context: Context,
): Promise<UpsertAspectOfHealthResult> {
  const { prisma } = context;
  const { input } = args;
  const inputAspectOfHealth: UpsertAspectOfHealthInput = input;
  const { conceptsOfInterest, indications } = inputAspectOfHealth;

  let aspectOfHealth: AspectOfHealth | null = null;
  const coiIds = (conceptsOfInterest || []).map(({ id }) => ({ id }));
  const iIds = (indications || []).map(({ id }) => ({ id }));

  const getKey = isUpdate => (isUpdate ? 'set' : 'connect');
  const getData = (isUpdate = false) => {
    const key = getKey(isUpdate);
    return {
      ...omit(inputAspectOfHealth, ['id']),
      conceptsOfInterest: { [key]: coiIds },
      indications: { [key]: iIds },
    };
  };

  if (!inputAspectOfHealth.id) {
    aspectOfHealth = await prisma.aspectOfHealth.create({
      data: getData(),
    });
  } else {
    aspectOfHealth = await prisma.aspectOfHealth.update({
      where: {
        id: inputAspectOfHealth.id,
      },
      data: getData(true),
    });
  }

  return { aspectOfHealth };
}

export default upsertAspectOfHealth;
