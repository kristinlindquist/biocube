/**
 * Measure type resolvers
 */
import {
  ConceptOfInterest,
  Indication,
  Measure,
  Question,
  ReportRecipe,
} from '@prisma/client';
import { Parent, Args, Context, MeasureRecipe } from '../../../../types';
import { omit } from 'lodash';

const Measure = {
  components: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<Measure[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).components();
  },

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

  questions: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<Question[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).questions();
  },

  recipe: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<MeasureRecipe | null> => {
    const { id } = parent;
    const { prisma } = context;

    const recipe = await prisma.measure
      .findUnique({ where: { id } })
      .recipe({ include: { filters: true } });

    return recipe ? {
      ...recipe,
      filters: recipe.filters.map((f) =>
        omit({ ...f, values: f.stringValues || f.numberValues }, [
          'numberValues',
          'stringValues',
        ]),
      ),
    } : null;
  },

  reports: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<ReportRecipe[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).reports();
  },

  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/measure/${id}`;
  },
};

export default Measure;
