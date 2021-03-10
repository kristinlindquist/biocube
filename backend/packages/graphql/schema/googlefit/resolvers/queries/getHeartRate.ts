import { GoogleFitnessAPI } from '../../datasource';
import { Parent, QueryGetHeartRateArgs, GetHeartRateInput, GetHeartRateResult } from '../../../../types';

const getHeartRate = async (_: Parent, args: QueryGetHeartRateArgs): Promise<GetHeartRateResult> => {
  const { input } = args;
  const { start, end }: GetHeartRateInput = input;
  const heartRate = await new GoogleFitnessAPI().getHeartRate(start, end, false);

  return { heartRate };
};

export default getHeartRate;
