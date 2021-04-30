import { Activity, Daily, HeartRate, Sleep } from './types';
import {
  getActivity,
  getDaily,
  getHeartRate,
  getSleep,
  syncGoogleFit,
} from './queries';

const resolvers = {
  Query: {
    getActivity,
    getDaily,
    getHeartRate,
    getSleep,
    syncGoogleFit,
  },
  Activity,
  Daily,
  HeartRate,
  Sleep,
};

export default resolvers;
