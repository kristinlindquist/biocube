/**
 * Measure type resolvers
 */
import { ConceptOfInterest, Indication } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Measure = {
  indications: async (parent: Parent, _: Args, context: Context): Promise<Indication[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).indications();
  },

  conceptsOfInterest: async (parent: Parent, _: Args, context: Context): Promise<ConceptOfInterest[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).conceptsOfInterest();
  }
};

export default Measure;
