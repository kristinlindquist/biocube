import { GoogleFitnessAPI } from '../../datasource';
import {
  Context,
  Parent,
  QueryGetSleepArgs,
  GetSleepInput,
  GetSleepResult,
} from '../../../../types';

const getSleep = async (
  _: Parent,
  args: QueryGetSleepArgs,
  context: Context,
): Promise<GetSleepResult> => {
  const { prisma } = context;
  const { input } = args;
  const { start, end, token }: GetSleepInput = input;
  const sleep = await new GoogleFitnessAPI().getSleep(token, start, end, false);

  const createMany = await prisma.datum.createMany({
    data: sleep.map(({ start, end, state }) => ({
      startedAt: new Date(start),
      duration: end - start,
      state: state.toUpperCase().replace(' ', '_'),
      deviceId: 1,
      dataTypeId: 5,
    })),
    skipDuplicates: true,
  });

  console.log(`Persisted ${createMany.count}`);

  return { sleep };
};

export default getSleep;
