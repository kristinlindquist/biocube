/**
 * ConceptOfInterest type resolvers
 */
import { AspectOfHealth, Measure } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const ConceptOfInterest = {
  aspectsOfHealth: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<AspectOfHealth[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.conceptOfInterest.findUnique({ where: { id } }).aspectsOfHealth();
  },

  measures: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<Measure[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.conceptOfInterest.findUnique({ where: { id } }).measures();
  },

  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/conceptofinterest/${id}`;
  },
};

export default ConceptOfInterest;
