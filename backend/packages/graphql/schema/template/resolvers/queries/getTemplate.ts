import { Template } from '@prisma/client';
import {
  Parent,
  Context,
  QueryGetTemplateArgs,
  GetTemplateInput,
  GetTemplateResult,
} from '../../../../types';

async function getTemplate(
  _: Parent,
  args: QueryGetTemplateArgs,
  context: Context,
): Promise<GetTemplateResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetTemplateInput = input;

  const template: Template | null = await prisma.template.findUnique({
    where: { id },
  });

  return { template };
}

export default getTemplate;
