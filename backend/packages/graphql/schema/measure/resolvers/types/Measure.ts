/**
 * Measure type resolvers
 */
import {
  ConceptOfInterest,
  DataType,
  MeasureComponent,
  Indication,
} from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

import { omit } from 'lodash';

const Measure = {
  conceptsOfInterest: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<ConceptOfInterest[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).conceptsOfInterest();
  },

  components: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<MeasureComponent[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    const measureComponents = await prisma.measureComponent.findMany({
      where: {
        measureId: id,
      },
      include: { dataType: true, filters: true },
    });

    return measureComponents.map(mp => ({
      ...mp,
      filters: mp.filters.map(f =>
        omit({ ...f, values: f.stringValues || f.numberValues }, [
          'numberValues',
          'stringValues',
        ]),
      ),
    }));
  },

  dataTypes: async (
    parent: Parent,
    _: Args,
    context: Context,
  ): Promise<DataType[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    const mtdts = await prisma.measureComponent.findMany({
      where: {
        measureId: id,
      },
      include: { dataType: true },
    });

    return mtdts.map(({ dataType }) => dataType);
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
    return `/measure/${id}`;
  },
};

export default Measure;
