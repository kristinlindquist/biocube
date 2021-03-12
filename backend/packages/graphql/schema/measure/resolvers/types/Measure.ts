/**
 * Measure type resolvers
 */
import { Indication } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Measure = {
  indication: async (parent: Parent, _: Args, context: Context): Promise<Indication | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).indication();
  }
};

export default Measure;
