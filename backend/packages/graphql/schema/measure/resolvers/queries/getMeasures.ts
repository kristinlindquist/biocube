import { Measure } from '@prisma/client';
import {
  Parent,
  Context,
  // GetMeasuresInput,
  GetMeasuresResult,
  QueryGetMeasuresArgs,
} from '../../../../types';

async function getMeasures(
  _: Parent,
  __: QueryGetMeasuresArgs,
  context: Context,
): Promise<GetMeasuresResult> {
  const { prisma } = context;
  // const { input } = args;
  // const { status }: GetMeasuresInput = input;

  const measures: Measure[] = await prisma.measure.findMany();

  return { measures };
}

export default getMeasures;
