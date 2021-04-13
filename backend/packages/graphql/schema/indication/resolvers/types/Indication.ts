/**
 * Indication type resolvers
 */
import { Measure } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Indication = {
  measures: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<Measure[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.indication.findUnique({ where: { id } }).measures();
  },

  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/indication/${id}`;
  },
};

export default Indication;
