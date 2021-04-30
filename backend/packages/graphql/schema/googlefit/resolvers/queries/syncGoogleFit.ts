import { GoogleFitnessAPI } from '../../datasource';
import {
  Context,
  Parent,
  QuerySyncGoogleFitArgs,
  SyncGoogleFitInput,
  SyncGoogleFitResult,
} from '../../../../types';

import { PrismaPromise } from '@prisma/client';

const syncGoogleFit = async (
  _: Parent,
  args: QuerySyncGoogleFitArgs,
  context: Context,
): Promise<SyncGoogleFitResult> => {
  const { prisma } = context;
  const { input } = args;
  const { start, end, token }: SyncGoogleFitInput = input;
  const activity = await new GoogleFitnessAPI().getActivity(
    token,
    start,
    end,
    false,
  );

  const heartRate = await new GoogleFitnessAPI().getHeartRate(
    token,
    start,
    end,
    false,
  );

  const sleep = await new GoogleFitnessAPI().getSleep(token, start, end, false);

  const createQueries = [] as Array<PrismaPromise<unknown>>;

  createQueries.push(prisma.datum.createMany({
    data: activity.map(({ start, end, state }) => ({
      startedAt: new Date(start),
      duration: Math.round(end - start),
      state: state ? state.toUpperCase().replace(' ', '_') : undefined,
      deviceId: 1,
      dataTypeId: 6,
    })),
    skipDuplicates: true,
  }));

  createQueries.push(prisma.datum.createMany({
    data: heartRate.map(({ date, point }) => ({
      startedAt: new Date(date),
      value: point,
      deviceId: 1,
      dataTypeId: 1,
    })),
    skipDuplicates: true,
  }));

  createQueries.push(prisma.datum.createMany({
    data: sleep.map(({ start, end, state }) => ({
      startedAt: new Date(start),
      duration: end - start,
      state: state.toUpperCase().replace(' ', '_'),
      deviceId: 1,
      dataTypeId: 5,
    })),
    skipDuplicates: true,
  }));

  // const results = await Promise.all(createQueries);

  return { result: true };
};

export default syncGoogleFit;
