import { Measure } from '@prisma/client';
import { Parent, Context, QueryGetMeasuresArgs, GetMeasuresInput, GetMeasuresResult } from '../../../../types';

async function getMeasures(_: Parent, args: QueryGetMeasuresArgs, context: Context): Promise<GetMeasuresResult> {
	const { prisma } = context;
	const { input } = args;
	const { interventionId }: GetMeasuresInput = input;

	const measures: [Measure] | null = await prisma.measures.find({ where: { interventionId } });

	return { measures };
}

export default getMeasures;
