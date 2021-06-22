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

const addMeasure = (array, measureId) =>
  array.map((i) => ({ ...i, measureId }));

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

    try {
      const activity = await api.getActivity(token, dayStart, dayEnd);
      const heartRate = await api.getHeartRate(token, dayStart, dayEnd);
      const sleep = await api.getSleep(token, dayStart, dayEnd, false);

      const data = [
        ...addMeasure(activity, 35),
        ...addMeasure(heartRate, 33),
        ...addMeasure(sleep, 50),
      ].map((d) => ({
        ...d,
        deviceId: 1,
        state: d.state?.toUpperCase().replace(' ', '_'),
      }));

      if (data.length > 0) {
        prisma.data.createMany({ data, skipDuplicates: true }).then((result) =>
          logger.log({
            level: 'info',
            message: `Create result: ${JSON.stringify(result)} for ${date}.`,
          }),
        );
      } else {
        logger.log({
          level: 'info',
          message: `Nothing to create for ${date}.`,
        });
      }
    } catch (error) {
      logger.log({ level: 'error', message: error });
    }
  });

  return { result: true };
};

export default syncGoogleFit;
