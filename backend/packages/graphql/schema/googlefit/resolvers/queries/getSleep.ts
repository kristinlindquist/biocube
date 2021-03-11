import { GoogleFitnessAPI } from '../../datasource';
import { Parent, QueryGetSleepArgs, GetSleepInput, GetSleepResult } from '../../../../types';

const getSleep = async (_: Parent, args: QueryGetSleepArgs): Promise<GetSleepResult> => {
  const { input } = args;
  const { start, end }: GetSleepInput = input;
  const sleep = await new GoogleFitnessAPI().getSleep(start, end, false);

  return { sleep };
};

export default getSleep;
