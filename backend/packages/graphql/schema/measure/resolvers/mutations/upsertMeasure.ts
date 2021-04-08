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
  const { conceptsOfInterest, dataTypes, indications } = inputMeasure;

  // if we don't limit this to ids, prisma gets mad
  const coiIds = (conceptsOfInterest || []).map(({ id }) => ({ id }));
  const dataTypeIds = (dataTypes || []).map(({ id }) => id);
  const indicationIds = (indications || []).map(({ id }) => ({ id }));
  let measure: Measure | null = null;

  const dataTypeMapIds = (
    await prisma.measureToDataType.findMany({
      where: {
        dataTypeId: { in: dataTypeIds },
      },
    })
  ).map(({ dataTypeId, measureId }) => ({ dataTypeId, measureId }));

  const getData = isUpdate => {
    const key = isUpdate ? 'set' : 'connect';
    return {
      ...omit(inputMeasure, 'id'),
      conceptsOfInterest: { [key]: coiIds },
      dataTypeMap: { [key]: dataTypeMapIds },
      indications: { [key]: indicationIds },
    };
  };

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
