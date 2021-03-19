import { Template } from '@prisma/client';
import {
  Parent,
  Context,
  QueryGetTemplatesArgs,
  GetTemplatesResult,
} from '../../../../types';

async function getTemplates(
  _: Parent,
  args: QueryGetTemplatesArgs,
  context: Context,
): Promise<GetTemplatesResult> {
  const { prisma } = context;
  const { input } = args;

  console.log(input);

  const templates: Template[] = await prisma.template.findMany({
    include: { pages: true },
  });

  return { templates };
}

export default getTemplates;
