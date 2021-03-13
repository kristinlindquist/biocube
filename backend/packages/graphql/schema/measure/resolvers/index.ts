import { Measure } from './types';
import { getMeasures, getMeasure } from './queries';

const resolvers = {
  Query: {
    getMeasures,
    getMeasure
  },
  Measure
};

export default resolvers;
