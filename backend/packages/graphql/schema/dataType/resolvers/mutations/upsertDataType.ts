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
  const { input } = args;
  const inputDataType: UpsertDataTypeInput = input;
  const { deviceTypes, id: dtId } = inputDataType;
  const devTypeIds = (deviceTypes || []).map(({ id }) => ({ id }));
  let dataType: DataType | null = null;

  if (!dtId) {
    dataType = await prisma.dataType.create({
      data: {
        ...omit(inputDataType, ['id', 'url']) as any,
        deviceTypes: { connect: devTypeIds },
      },
    });
  } else {
    dataType = await prisma.dataType.update({
      where: {
        id: dtId,
      },
      data: {
        ...omit(inputDataType, ['id', 'url']) as any,
        deviceTypes: { set: devTypeIds },
      },
    });
  }

  return { dataType };
}

export default upsertDataType;
