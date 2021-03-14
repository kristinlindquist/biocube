import { Indication } from '@prisma/client';
import { Parent, Context, QueryGetIndicationArgs, GetIndicationInput, GetIndicationResult } from '../../../../types';

async function getIndication(_: Parent, args: QueryGetIndicationArgs, context: Context): Promise<GetIndicationResult> {
	const { prisma } = context;
	const { input } = args;
	const { id }: GetIndicationInput = input;

	const indication: Indication | null = await prisma.indication.findUnique({ where: { id } })

	return { indication };
}

export default getIndication;
