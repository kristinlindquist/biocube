/**
 * ConceptOfInterest type resolvers
 */
import { Parent } from '../../../../types';

const ConceptOfInterest = {
  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/coi/${id}`;
  }
};

export default ConceptOfInterest;
