import { Template } from '@prisma/client';
import {
  Parent,
  Context,
  MutationDeleteTemplateArgs,
  DeleteTemplateInput,
  DeleteTemplateResult,
} from '../../../../types';

async function deleteTemplate(
  _: Parent,
  args: MutationDeleteTemplateArgs,
  context: Context,
): Promise<DeleteTemplateResult> {
  const { prisma } = context;
  const { input } = args;
  const inputTemplate: DeleteTemplateInput = input;

  const template: Template = await prisma.template.delete({
    where: {
      id: inputTemplate.id,
    },
  });

  return { template };
}

export default deleteTemplate;
