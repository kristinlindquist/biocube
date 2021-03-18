import { Template } from '@prisma/client';
import {
	Parent,
	Context,
	MutationUpsertTemplateArgs,
	UpsertTemplateInput,
	UpsertTemplateResult,
} from '../../../../types';
import { omit } from 'lodash';

async function upsertTemplate(
	_: Parent,
	args: MutationUpsertTemplateArgs,
	context: Context,
): Promise<UpsertTemplateResult> {
	const { prisma } = context;
	const { input } = args;
	const inputTemplate: UpsertTemplateInput = input;

	let template: Template | null = null;

	if (!inputTemplate.id) {
		template = await prisma.template.create({
			data: {
				...omit(inputTemplate, 'id'),
			},
		});
	} else {
		template = await prisma.template.update({
			where: {
				id: inputTemplate.id,
			},
			data: {
				...omit(inputTemplate, 'id'),
			},
		});
	}

	return { template };
}

export default upsertTemplate;
