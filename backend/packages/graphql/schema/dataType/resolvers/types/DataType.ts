/**
 * DataType type resolvers
 */
import { Parent } from '../../../../types';

const DataType = {
  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/datatype/${id}`;
  }
};

export default DataType;
