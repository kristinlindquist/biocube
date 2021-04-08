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

  // if we don't limit this to ids, prisma gets mad
  const coiIds = inputMeasure.conceptsOfInterest.map(({ id }) => ({ id }));
  const indicationIds = inputMeasure.indications.map(({ id }) => ({ id }));
  let measure: Measure | null = null;

  const getData = isUpdate => ({
    ...omit(inputMeasure, 'id'),
    conceptsOfInterest: { [isUpdate ? 'set' : 'connect']: coiIds },
    indications: { [isUpdate ? 'set' : 'connect']: indicationIds },
  });

  if (!inputMeasure.id) {
    measure = await prisma.measure.create({ data: getData(false) });
  } else {
    measure = await prisma.measure.update({
      where: {
        id: inputMeasure.id,
      },
      data: getData(true),
    });
  }

  return { measure };
}

export default upsertMeasure;
