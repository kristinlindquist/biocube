import { Indication } from './types';
import { getIndications, getIndication } from './queries';
import { deleteIndication, upsertIndication } from './mutations';

const resolvers = {
  Query: {
    getIndications,
    getIndication
  },
  Mutation: {
    deleteIndication,
    upsertIndication
  },
  Indication
};

export default resolvers;
