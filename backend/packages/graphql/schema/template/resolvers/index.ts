import { Template } from './types';
import { getTemplates, getTemplate } from './queries';
import { deleteTemplate, upsertTemplate } from './mutations';

const resolvers = {
  Query: {
    getTemplates,
    getTemplate
  },
  Mutation: {
    deleteTemplate,
    upsertTemplate
  },
  Template
};

export default resolvers;
