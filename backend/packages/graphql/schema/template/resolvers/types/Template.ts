/**
 * Template type resolvers
 */
import { Page, Template } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Template = {
  pages: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<Page[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    const pages: Page[] = await prisma.template
      .findUnique({ where: { id } })
      .pages();

    const parentIds = pages.map((p) => p.id);

    return await context.prisma.page.findMany({
      where: {
        id: {
          in: parentIds,
        },
      },
      include: {
        components: {
          include: {
            read: true,
            readOne: true,
            upsert: true,
            delete: true,
          },
        },
      },
    });
  },
};

export default Template;
