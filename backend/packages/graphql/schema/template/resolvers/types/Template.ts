/**
 * Template type resolvers
 */
import { Page, Template } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Template = {
  pages: async (parent: Parent, _: Args, context: Context): Promise<Page[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.template.findUnique({ where: { id } }).pages();
  },
};

export default Template;
