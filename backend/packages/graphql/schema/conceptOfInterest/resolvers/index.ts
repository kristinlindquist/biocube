import { ConceptOfInterest } from './types';
import { getConceptsOfInterest, getConceptOfInterest } from './queries';
import { deleteConceptOfInterest, upsertConceptOfInterest } from './mutations';

const resolvers = {
  Query: {
    getConceptsOfInterest,
    getConceptOfInterest
  },
  Mutation: {
    deleteConceptOfInterest,
    upsertConceptOfInterest
  },
  ConceptOfInterest
};

export default resolvers;
