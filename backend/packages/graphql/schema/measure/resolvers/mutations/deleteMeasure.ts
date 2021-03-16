import { Measure } from '@prisma/client';
import {
  Parent,
  Context,
  MutationDeleteMeasureArgs,
  DeleteMeasureInput,
  DeleteMeasureResult,
} from '../../../../types';

async function deleteMeasure(
  _: Parent,
  args: MutationDeleteMeasureArgs,
  context: Context,
): Promise<DeleteMeasureResult> {
  const { prisma } = context;
  const { input } = args;
  const inputMeasure: DeleteMeasureInput = input;

  const measure: Measure = await prisma.measure.delete({
    where: {
      id: inputMeasure.id,
    },
  });

  return { measure };
}

export default deleteMeasure;
