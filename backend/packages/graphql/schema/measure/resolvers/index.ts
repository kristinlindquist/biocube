import { Measure } from './types';
import { getMeasures } from './queries';

const resolvers = {
  Query: {
    getMeasures
  },
  Measure
};

export default resolvers;
