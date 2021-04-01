import { ReactElement } from 'react';
import { Select } from 'components/Inputs';

import { GroupProps } from './types';
import { getSelectProps } from './utils';

const MemberGroup = ({
  members,
  availableMembers,
  name,
  updateMethods,
}: GroupProps): ReactElement => (
  <Select
    {...getSelectProps(availableMembers, updateMethods)}
    defaultValue={members}
    label={name}
    multiple
  />
);

export default MemberGroup;
