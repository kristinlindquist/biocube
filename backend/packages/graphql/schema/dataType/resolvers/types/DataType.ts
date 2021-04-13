/**
 * DataType type resolvers
 */
import { DataType, DeviceType } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const DataType = {
  deviceTypes: async (parent: Parent, _: Args, context: Context): Promise<DeviceType[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.dataType.findUnique({ where: { id } }).deviceTypes();
  },
  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/datatype/${id}`;
  }
};

export default DataType;
