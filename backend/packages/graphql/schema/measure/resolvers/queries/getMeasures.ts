import { Measure } from '@prisma/client';
import { Parent, Context, QueryGetMeasuresArgs, GetMeasuresResult } from '../../../../types';

async function getMeasures(_: Parent, args: QueryGetMeasuresArgs, context: Context): Promise<GetMeasuresResult> {
	const { prisma } = context;
	const { input } = args;

	console.log(input);

	const measures: Measure[] = await prisma.measure.findMany();

	return { measures };
}

export default getMeasures;
