import { DataType } from '@prisma/client';
import { Parent, Context, GetDataTypesResult } from '../../../../types';

async function getDataTypes(
  _: Parent,
  __,
  context: Context,
): Promise<GetDataTypesResult> {
  const { prisma } = context;

  const dataTypes: DataType[] = await prisma.dataType.findMany();

  return { dataTypes };
}

export default getDataTypes;
