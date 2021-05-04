/**
 * Measure AspectOfHealth resolvers
 */
import { ConceptOfInterest, Indication } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const AspectOfHealth = {
  conceptsOfInterest: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<ConceptOfInterest[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).conceptsOfInterest();
  },

  indications: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<Indication[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).indications();
  },

  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/aspectofhealth/${id}`;
  },
};

export default AspectOfHealth;
