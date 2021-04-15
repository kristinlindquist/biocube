import { GoogleFitnessAPI } from '../../datasource';
import {
  Parent,
  QueryGetDailyArgs,
  GetDailyInput,
  GetDailyResult,
} from '../../../../types';

const getDaily = async (
  _: Parent,
  args: QueryGetDailyArgs,
): Promise<GetDailyResult> => {
  const { input } = args;
  const { start, end, token }: GetDailyInput = input;
  const daily = await new GoogleFitnessAPI().getDaily(token, start, end);

  return { daily };
};

export default getDaily;
