import { DataType } from '@prisma/client';
import {
  Parent,
  Context,
  MutationDeleteDataTypeArgs,
  DeleteDataTypeInput,
  DeleteDataTypeResult,
} from '../../../../types';

async function deleteDataType(
  _: Parent,
  args: MutationDeleteDataTypeArgs,
  context: Context,
): Promise<DeleteDataTypeResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: DeleteDataTypeInput = input;

  const dataType: DataType = await prisma.dataType.delete({
    where: {
      id,
    },
  });

  return { dataType };
}

export default deleteDataType;
