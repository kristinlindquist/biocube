import { Measure } from './types';
import { getMeasures, getMeasure } from './queries';
import { deleteMeasure, upsertMeasure } from './mutations';

const resolvers = {
  Query: {
    getMeasures,
    getMeasure
  },
  Mutation: {
    deleteMeasure,
    upsertMeasure
  },
  Measure
};

export default resolvers;
