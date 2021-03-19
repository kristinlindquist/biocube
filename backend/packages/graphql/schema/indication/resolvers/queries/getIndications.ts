import { Indication } from '@prisma/client';
import {
  Parent,
  Context,
  QueryGetIndicationsArgs,
  GetIndicationsResult,
} from '../../../../types';

async function getIndications(
  _: Parent,
  args: QueryGetIndicationsArgs,
  context: Context,
): Promise<GetIndicationsResult> {
  const { prisma } = context;
  const { input } = args;

  console.log(input);

  const indications: Indication[] = await prisma.indication.findMany();

  return { indications };
}

export default getIndications;
