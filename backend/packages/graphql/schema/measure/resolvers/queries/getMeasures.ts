import { Measure } from '@prisma/client';
import { Parent, Context, GetMeasuresResult } from '../../../../types';

async function getMeasures(_: Parent, __, context: Context): Promise<GetMeasuresResult> {
	const { prisma } = context;

	const measures: Measure[] = await prisma.measure.findMany();

	return { measures };
}

export default getMeasures;
