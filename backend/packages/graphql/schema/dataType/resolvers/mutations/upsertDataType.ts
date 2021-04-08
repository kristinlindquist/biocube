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

  let dataType: DataType | null = null;

  if (!inputDataType.id) {
    dataType = await prisma.dataType.create({
      data: {
        ...omit(inputDataType, 'id'),
      },
    });
  } else {
    dataType = await prisma.dataType.update({
      where: {
        id: inputDataType.id,
      },
      data: {
        ...omit(inputDataType, 'id'),
      },
    });
  }

  return { dataType };
}

export default upsertDataType;
