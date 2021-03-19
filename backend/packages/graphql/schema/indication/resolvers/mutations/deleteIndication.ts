import { Indication } from '@prisma/client';
import {
  Parent,
  Context,
  MutationDeleteIndicationArgs,
  DeleteIndicationInput,
  DeleteIndicationResult,
} from '../../../../types';

async function deleteIndication(
  _: Parent,
  args: MutationDeleteIndicationArgs,
  context: Context,
): Promise<DeleteIndicationResult> {
  const { prisma } = context;
  const { input } = args;
  const inputIndication: DeleteIndicationInput = input;

  const indication: Indication = await prisma.indication.delete({
    where: {
      id: inputIndication.id,
    },
  });

  return { indication };
}

export default deleteIndication;
