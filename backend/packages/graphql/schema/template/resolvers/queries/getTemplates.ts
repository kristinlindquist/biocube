import { Template } from '@prisma/client';
import { Parent, Context, GetTemplatesResult } from '../../../../types';

async function getTemplates(
  _: Parent,
  __,
  context: Context,
): Promise<GetTemplatesResult> {
  const { prisma } = context;

  const templates: Template[] = await prisma.template.findMany({
    include: { pages: true },
  });

  return { templates };
}

export default getTemplates;
