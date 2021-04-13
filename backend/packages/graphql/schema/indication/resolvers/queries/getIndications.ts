import { Indication } from '@prisma/client';
import { Parent, Context, GetIndicationsResult } from '../../../../types';

async function getIndications(
  _: Parent,
  __,
  context: Context,
): Promise<GetIndicationsResult> {
  const { prisma } = context;

  const indications: Indication[] = await prisma.indication.findMany();

  return { indications };
}

export default getIndications;
