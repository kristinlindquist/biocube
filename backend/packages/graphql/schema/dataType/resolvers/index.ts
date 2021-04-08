import { DataType } from './types';
import { getDataTypes, getDataType } from './queries';
import { deleteDataType, upsertDataType } from './mutations';

const resolvers = {
  Query: {
    getDataTypes,
    getDataType
  },
  Mutation: {
    deleteDataType,
    upsertDataType
  },
  DataType
};

export default resolvers;
