/**
 * DataType type resolvers
 */
import { DeviceType, Measure } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const DataType = {
  deviceTypes: async (parent: Parent, _: Args, context: Context): Promise<DeviceType[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.dataType.findUnique({ where: { id } }).deviceTypes();
  },

  measures: async (parent: Parent, _: Args, context: Context): Promise<Measure[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    const mps = await prisma.measureComponent.findMany({
      where: {
        dataTypeId: id,
      },
      include: { measure: true },
    });

    return mps.map(({ measure }) => measure);
  },

  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/datatype/${id}`;
  }
};

export default DataType;
