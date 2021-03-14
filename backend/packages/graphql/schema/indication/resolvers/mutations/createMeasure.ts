import { Measure } from '@prisma/client';
import { Parent, Context, MutationCreateMeasureArgs, CreateMeasureInput, CreateMeasureResult } from '../../../../types';

async function createMeasure(_: Parent, args: MutationCreateMeasureArgs, context: Context): Promise<CreateMeasureResult> {
	const { prisma } = context;
	const { input } = args;
	const measure: CreateMeasureInput = input;

	const newMeasure: Measure = await prisma.measure.create({ data: measure });

	return { measure: newMeasure };
}

export default createMeasure;
