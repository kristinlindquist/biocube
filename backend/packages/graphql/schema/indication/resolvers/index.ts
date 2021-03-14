import { Measure } from './types';
import { getMeasures, getMeasure } from './queries';
import { createMeasure } from './mutations';

const resolvers = {
  Query: {
    getMeasures,
    getMeasure
  },
  Mutation: {
    createMeasure
  },
  Measure
};

export default resolvers;
