import { Device } from '@prisma/client';
import { Parent, Context, QueryGetDeviceArgs, GetDeviceInput, GetDeviceResult } from '@backend/graphql/types';

async function getDevice(_: Parent, args: QueryGetDeviceArgs, context: Context): Promise<GetDeviceResult> {
  const { prisma } = context;
  const { input } = args;
  const { id }: GetDeviceInput = input;

  const device: Device | null = await prisma.device.findUnique({ where: { id } });

  return { device };
}

export default getDevice;
