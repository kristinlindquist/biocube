import { Activity, Daily, HeartRate, Sleep } from './types';
import { getActivity, getDaily, getHeartRate, getSleep } from './queries';

const resolvers = {
  Query: {
    getActivity,
    getDaily,
    getHeartRate,
    getSleep
  },
  Activity,
  Daily,
  HeartRate,
  Sleep
};

export default resolvers;
