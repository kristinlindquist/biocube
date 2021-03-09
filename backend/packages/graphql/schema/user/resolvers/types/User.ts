/**
 * User type resolvers
 */
import { Device } from '@prisma/client';
import { Parent, Args, Context } from '../../../../types';

const User = {
  devices: async (parent: Parent, _: Args, context: Context): Promise<Device[] | null> => {
    const { id } = parent;
    const { prisma } = context;

    return prisma.user.findUnique({ where: { id } }).devices();
  }
};

export default User;
