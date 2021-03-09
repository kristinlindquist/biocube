import { Device } from './types';
import { getDevice } from './queries';

const resolvers = {
  Query: {
    getDevice
  },
  Device
};

export default resolvers;
