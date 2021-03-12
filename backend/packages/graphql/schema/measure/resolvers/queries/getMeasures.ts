import { Measure } from '@prisma/client';
import { Parent, Context, GetMeasuresResult } from '../../../../types';

async function getMeasures(_: Parent, context: Context): Promise<GetMeasuresResult> {
	const { prisma } = context;
	console.log('hisfsdf');

	const measures: Measure[] = await prisma.measure.findMany();
	console.log(measures);

	return { measures };
}

export default getMeasures;
