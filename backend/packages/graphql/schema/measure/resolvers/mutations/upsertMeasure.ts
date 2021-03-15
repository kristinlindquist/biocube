import { Measure } from '@prisma/client';
import { Parent, Context, MutationUpsertMeasureArgs, UpsertMeasureInput, UpsertMeasureResult } from '../../../../types';
import { omit } from 'lodash';

async function upsertMeasure(
	_: Parent,
	args: MutationUpsertMeasureArgs,
	context: Context
): Promise<UpsertMeasureResult> {
	const { prisma } = context;
	const { input } = args;
	const measure: UpsertMeasureInput = input;

	if (!measure.id) {
		const newMeasure: Measure = await prisma.measure.create({
			data: { ...omit(measure, 'id'), indications: { connect: measure.indications.map(({ id }) => ({ id })) } }
		});
		return { measure: newMeasure };
	}

	const updatedMeasure: Measure = await prisma.measure.update({
		where: {
			id: measure.id,
		},
		data: { ...omit(measure, 'id'), indications: { connect: measure.indications.map(({ id }) => ({ id })) } }
	});

	return { measure: updatedMeasure };
}

export default upsertMeasure;
