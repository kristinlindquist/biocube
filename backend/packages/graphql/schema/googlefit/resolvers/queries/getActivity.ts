import { GoogleFitnessAPI } from '../../datasource';
import {
  Context,
  Parent,
  QueryGetActivityArgs,
  GetActivityInput,
  GetActivityResult,
} from '../../../../types';

const getActivity = async (
  _: Parent,
  args: QueryGetActivityArgs,
  context: Context,
): Promise<GetActivityResult> => {
  const { prisma } = context;
  const { input } = args;
  const { start, end }: GetActivityInput = input;
  const activity = await new GoogleFitnessAPI().getActivity(start, end, false);

  const createMany = await prisma.datum.createMany({
    data: activity.map(({ start, end, state }) => ({
      startedAt: new Date(start),
      duration: Math.round(end - start),
      state: state ? state.toUpperCase().replace(' ', '_') : undefined,
      deviceId: 1,
      dataTypeId: 6,
    })),
    skipDuplicates: true,
  });

  console.log(`Persisted ${createMany.count}`);

  return { activity };
};

export default getActivity;
