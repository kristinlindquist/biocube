import { ReactElement } from 'react';
import { Select } from 'components/Inputs';

import { GroupProps } from './types';
import { getSelectProps } from './utils';

const MemberGroup = ({
  availableMembers,
  members,
  name,
  ...props
}: GroupProps): ReactElement => (
  <Select
    {...getSelectProps({
      availableMembers,
      members,
      ...props,
    })}
    label={name}
    multiple
  />
);

export default MemberGroup;
