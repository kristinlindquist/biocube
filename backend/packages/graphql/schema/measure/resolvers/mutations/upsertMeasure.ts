import { Measure } from '@prisma/client';
import {
	Parent,
	Context,
	MutationUpsertMeasureArgs,
	UpsertMeasureInput,
	UpsertMeasureResult,
} from '../../../../types';
import { omit } from 'lodash';

async function upsertMeasure(
	_: Parent,
	args: MutationUpsertMeasureArgs,
	context: Context,
): Promise<UpsertMeasureResult> {
	const { prisma } = context;
	const { input } = args;
	const inputMeasure: UpsertMeasureInput = input;

	const indicationIds = inputMeasure.indications.map(({ id }) => ({ id }));
	let measure: Measure | null = null;

	if (!inputMeasure.id) {
		measure = await prisma.measure.create({
			data: {
				...omit(inputMeasure, 'id'),
				indications: { connect: indicationIds },
			},
		});
	} else {
		measure = await prisma.measure.update({
			where: {
				id: inputMeasure.id,
			},
			data: {
				...omit(inputMeasure, 'id'),
				indications: { set: indicationIds },
			},
		});
	}

	return { measure };
}

export default upsertMeasure;
