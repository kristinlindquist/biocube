import { HeartRate } from './types';
import { getHeartRate } from './queries';

const resolvers = {
  Query: {
    getHeartRate
  },
  HeartRate
};

export default resolvers;
