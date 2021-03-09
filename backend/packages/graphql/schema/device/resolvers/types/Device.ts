/**
 * Device type resolvers
 */
import { User } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const Device = {
  user: async (parent: Parent, _: Args, context: Context): Promise<User | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.device.findUnique({ where: { id } }).user();
  }
};

export default Device;
