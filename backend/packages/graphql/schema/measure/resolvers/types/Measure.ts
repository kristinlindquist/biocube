/**
 * Measure type resolvers
 */
import { ConceptOfInterest, DataType, Indication } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Measure = {
  conceptsOfInterest: async (parent: Parent, _: Args, context: Context): Promise<ConceptOfInterest[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).conceptsOfInterest();
  },

  dataTypes: async (parent: Parent, _: Args, context: Context): Promise<DataType[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    const mtdts = await prisma.measureToDataType.findMany({
      where: {
        measureId: id,
      },
      include: { dataType: true },
    });

    return mtdts.map(({ dataType }) => dataType);
  },

  indications: async (parent: Parent, _: Args, context: Context): Promise<Indication[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.measure.findUnique({ where: { id } }).indications();
  },

  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/measure/${id}`;
  }
};

export default Measure;
