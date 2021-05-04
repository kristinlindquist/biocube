import { AspectOfHealth } from './types';
import { getAspectsOfHealth, getAspectOfHealth } from './queries';
import { deleteAspectOfHealth, upsertAspectOfHealth } from './mutations';

const resolvers = {
  Query: {
    getAspectsOfHealth,
    getAspectOfHealth
  },
  Mutation: {
    deleteAspectOfHealth,
    upsertAspectOfHealth
  },
  AspectOfHealth
};

export default resolvers;
