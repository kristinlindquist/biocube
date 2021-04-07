import { Measure } from '@prisma/client';
import {
  Parent,
  Context,
  MutationUpsertMeasureArgs,
  UpsertMeasureInput,
  UpsertMeasureResult,
} from '../../../../types';
import { omit } from 'lodash';

async function upsertMeasure(
  _: Parent,
  args: MutationUpsertMeasureArgs,
  context: Context,
): Promise<UpsertMeasureResult> {
  const { prisma } = context;
  const { input } = args;
  const inputMeasure: UpsertMeasureInput = input;

  const coiIds = inputMeasure.conceptsOfInterest.map(({ id }) => ({ id }));
  const indicationIds = inputMeasure.indications.map(({ id }) => ({ id }));
  let measure: Measure | null = null;

  const data = {
    ...omit(inputMeasure, 'id'),
    conceptsOfInterest: { connect: coiIds },
    indications: { connect: indicationIds },
  };

  if (!inputMeasure.id) {
    measure = await prisma.measure.create({ data });
  } else {
    measure = await prisma.measure.update({
      where: {
        id: inputMeasure.id,
      },
      data,
    });
  }

  return { measure };
}

export default upsertMeasure;
