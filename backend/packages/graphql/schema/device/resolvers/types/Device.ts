/**
 * Device type resolvers
 */
import { Parent } from '../../../../types';

const Device = {
  url: (parent: Parent): string | null => {
    const { id } = parent;
    return `/device/${id}`;
  }
};

export default Device;
