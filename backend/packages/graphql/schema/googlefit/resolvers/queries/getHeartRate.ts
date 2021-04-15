import { GoogleFitnessAPI } from '../../datasource';
import {
  Context,
  GetHeartRateInput,
  GetHeartRateResult,
  Parent,
  QueryGetHeartRateArgs,
} from '../../../../types';

const getHeartRate = async (
  _: Parent,
  args: QueryGetHeartRateArgs,
  context: Context,
): Promise<GetHeartRateResult> => {
  const { prisma } = context;
  const { input } = args;
  const { start, end, token }: GetHeartRateInput = input;
  const heartRate = await new GoogleFitnessAPI().getHeartRate(
    token,
    start,
    end,
    false,
  );

  const createMany = await prisma.datum.createMany({
    data: heartRate.map(({ date, point }) => ({
      startedAt: new Date(date),
      value: point,
      deviceId: 1,
      dataTypeId: 1,
    })),
    skipDuplicates: true,
  });

  console.log(`Persisted ${createMany.count}`);

  return { heartRate };
};

export default getHeartRate;
