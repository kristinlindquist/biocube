import { Measure } from './types';
import { getMeasures, getMeasure } from './queries';
import { upsertMeasure } from './mutations';

const resolvers = {
  Query: {
    getMeasures,
    getMeasure
  },
  Mutation: {
    upsertMeasure
  },
  Measure
};

export default resolvers;
