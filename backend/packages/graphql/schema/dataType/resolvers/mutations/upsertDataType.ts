import { DataType } from '@prisma/client';
import {
  Parent,
  Context,
  MutationUpsertDataTypeArgs,
  UpsertDataTypeInput,
  UpsertDataTypeResult,
} from '../../../../types';
import { omit } from 'lodash';

async function upsertDataType(
  _: Parent,
  args: MutationUpsertDataTypeArgs,
  context: Context,
): Promise<UpsertDataTypeResult> {
  const { prisma } = context;
  const { input } = args as { input: UpsertDataTypeInput };
  const { deviceTypes, id: dtId, measures } = input;
  const devTypeIds = (deviceTypes || []).map(({ id }) => ({ id }));
  const mIds = (measures || []).map(({ id }) => id);
  let dataType: DataType | null = null;

  const getKey = isUpdate => (isUpdate ? 'set' : 'connect');
  const getData = (isUpdate = false) => {
    const key = getKey(isUpdate);
    return {
      ...omit(input, ['id', 'measures', 'url']) as any,
        deviceTypes: { [key]: devTypeIds },
        measures: { [key]: mIds },
    };
  };

  if (!dtId) {
    dataType = await prisma.dataType.create({
      data: {
        ...getData(),
        measureComponents: {
          createMany: {
            data: mIds.map(id => ({
              measureId: id,
            })),
          },
        },
      },
    });
  } else {
    await prisma.measureComponent.createMany({
      data: mIds.map(id => ({ dataTypeId: dtId, measureId: id })),
      skipDuplicates: true,
    });

    dataType = await prisma.dataType.update({
      where: {
        id: dtId,
      },
      data: {
        ...getData(true),
        measureComponents: {
          deleteMany: {
            measureId: { notIn: mIds },
          },
        },
      },
    });
  }

  return { dataType };
}

export default upsertDataType;
