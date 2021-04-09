import { Measure } from '@prisma/client';
import {
  Parent,
  Context,
  QueryGetMeasureArgs,
  GetMeasureInput,
  GetMeasureResult,
} from '../../../../types';

async function getMeasure(
  _: Parent,
  args: QueryGetMeasureArgs,
  context: Context,
): Promise<GetMeasureResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetMeasureInput = input;

  const measure: Measure | null = await prisma.measure.findUnique({
    where: { id },
  });

  return { measure };
}

export default getMeasure;
