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
  const { input } = args;
  const inputIndication: UpsertIndicationInput = input;

  let indication: Indication | null = null;

  if (!inputIndication.id) {
    indication = await prisma.indication.create({
      data: {
        ...omit(inputIndication, 'id'),
      },
    });
  } else {
    indication = await prisma.indication.update({
      where: {
        id: inputIndication.id,
      },
      data: {
        ...omit(inputIndication, 'id'),
      },
    });
  }

  return { indication };
}

export default upsertIndication;
