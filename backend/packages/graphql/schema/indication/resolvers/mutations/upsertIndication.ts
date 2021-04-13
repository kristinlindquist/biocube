import { Indication } from '@prisma/client';
import {
  Parent,
  Context,
  MutationUpsertIndicationArgs,
  UpsertIndicationInput,
  UpsertIndicationResult,
} from '../../../../types';
import { omit } from 'lodash';

async function upsertIndication(
  _: Parent,
  args: MutationUpsertIndicationArgs,
  context: Context,
): Promise<UpsertIndicationResult> {
  const { prisma } = context;
  const { input } = args as { input: UpsertIndicationInput };
  const { id, measures } = input;
  const mIds = (measures || []).map(({ id }) => ({ id }));
  let indication: Indication | null = null;

  const getKey = isUpdate => (isUpdate ? 'set' : 'connect');
  const getData = (isUpdate = false) => {
    const key = getKey(isUpdate);
    return {
      ...omit(input, ['id', 'url']),
      measures: { [key]: mIds },
    };
  };

  if (!id) {
    indication = await prisma.indication.create({
      data: getData(),
    });
  } else {
    indication = await prisma.indication.update({
      where: { id },
      data: getData(true),
    });
  }

  return { indication };
}

export default upsertIndication;
