import { HeartRate, Sleep } from './types';
import { getHeartRate, getSleep } from './queries';

const resolvers = {
  Query: {
    getHeartRate,
    getSleep
  },
  HeartRate,
  Sleep
};

export default resolvers;
