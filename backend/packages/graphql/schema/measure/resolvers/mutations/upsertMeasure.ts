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
  const { conceptsOfInterest, dataTypes, id: mId, indications } = inputMeasure;

  // if we don't limit this to ids, prisma gets mad
  const coiIds = (conceptsOfInterest || []).map(({ id }) => ({ id }));
  const dtIds = (dataTypes || []).map(({ id }) => id);
  const iIds = (indications || []).map(({ id }) => ({ id }));
  let measure: Measure | null = null;

  const getKey = isUpdate => (isUpdate ? 'set' : 'connect');
  const getData = (isUpdate = false) => {
    const key = getKey(isUpdate);
    return {
      ...omit(inputMeasure, ['id', 'dataTypes']),
      conceptsOfInterest: { [key]: coiIds },
      indications: { [key]: iIds },
    };
  };

  if (!mId) {
    measure = await prisma.measure.create({
      data: {
        ...getData(),
        dataTypeMap: {
          createMany: {
            data: dtIds.map(id => ({
              dataTypeId: id,
            })),
          },
        },
      },
    });
  } else {
    await prisma.measureToDataType.createMany({
      data: dtIds.map(id => ({ dataTypeId: id, measureId: mId })),
      skipDuplicates: true,
    });
    measure = await prisma.measure.update({
      where: { id: mId },
      data: {
        ...getData(true),
        dataTypeMap: {
          deleteMany: {
            dataTypeId: { notIn: dtIds },
          },
        },
      },
    });
  }

  return { measure };
}

export default upsertMeasure;
