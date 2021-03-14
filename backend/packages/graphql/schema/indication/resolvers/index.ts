import { Indication } from './types';
import { getIndications, getIndication } from './queries';
import { createIndication } from './mutations';

const resolvers = {
  Query: {
    getIndications,
    getIndication
  },
  Mutation: {
    createIndication
  },
  Indication
};

export default resolvers;
