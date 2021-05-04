import moment from 'moment';
import { getRangeOfDates, logger } from '@backend/utils';

import { GoogleFitnessAPI } from '../../datasource';
import {
  Context,
  Parent,
  QuerySyncGoogleFitArgs,
  SyncGoogleFitInput,
  SyncGoogleFitResult,
} from '../../../../types';

const addDataType = (array, dataTypeId) =>
  array.map((i) => ({ ...i, dataTypeId }));

const syncGoogleFit = async (
  _: Parent,
  args: QuerySyncGoogleFitArgs,
  context: Context,
): Promise<SyncGoogleFitResult> => {
  const { prisma } = context;
  const { input } = args;
  const { start, end, token }: SyncGoogleFitInput = input;
  const api = new GoogleFitnessAPI();

  getRangeOfDates(start, end).forEach(async (date) => {
    const dayStart = date;
    const dayEnd = moment(date).endOf('days').toDate();

    const activity = await api.getActivity(token, dayStart, dayEnd);
    const heartRate = await api.getHeartRate(token, dayStart, dayEnd);
    const sleep = await api.getSleep(token, dayStart, dayEnd, false);

    const data = [
      ...addDataType(activity, 6),
      ...addDataType(heartRate, 1),
      ...addDataType(sleep, 5),
    ].map((d) => ({
      ...d,
      deviceId: 1,
      state: d.state ? d.state.toUpperCase().replace(' ', '_') : undefined,
    }));

    if (data.length > 0) {
      prisma.datum.createMany({ data, skipDuplicates: true }).then((result) =>
        logger.log({
          level: 'info',
          message: `Create result: ${JSON.stringify(result)} for ${date}.`,
        }),
      );
    } else {
      logger.log({ level: 'info', message: `Nothing to create for ${date}.` });
    }
  });

  return { result: true };
};

export default syncGoogleFit;
