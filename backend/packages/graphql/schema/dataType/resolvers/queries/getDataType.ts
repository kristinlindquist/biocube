import { DataType } from '@prisma/client';
import { Parent, Context, QueryGetDataTypeArgs, GetDataTypeInput, GetDataTypeResult } from '../../../../types';

async function getDataType(_: Parent, args: QueryGetDataTypeArgs, context: Context): Promise<GetDataTypeResult> {
	const { prisma } = context;
	const { input } = args;
	const { id }: GetDataTypeInput = input;

	const dataType: DataType | null = await prisma.dataType.findUnique({ where: { id } })

	return { dataType };
}

export default getDataType;
