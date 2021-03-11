import { GoogleFitnessAPI } from '../../datasource';
import { Parent, QueryGetActivityArgs, GetActivityInput, GetActivityResult } from '../../../../types';

const getActivity = async (_: Parent, args: QueryGetActivityArgs): Promise<GetActivityResult> => {
  const { input } = args;
  const { start, end }: GetActivityInput = input;
  const activity = await new GoogleFitnessAPI().getActivity(start, end, false);

  return { activity };
};

export default getActivity;
