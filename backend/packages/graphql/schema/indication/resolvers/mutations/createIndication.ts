import { Indication } from '@prisma/client';
import { Parent, Context, MutationCreateIndicationArgs, CreateIndicationInput, CreateIndicationResult } from '../../../../types';

async function createIndication(_: Parent, args: MutationCreateIndicationArgs, context: Context): Promise<CreateIndicationResult> {
	const { prisma } = context;
	const { input } = args;
	const indication: CreateIndicationInput = input;

	const newIndication: Indication = await prisma.indication.create({ data: indication });

	return { indication: newIndication };
}

export default createIndication;
