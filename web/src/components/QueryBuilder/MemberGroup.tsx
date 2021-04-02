import { ReactElement } from 'react';
import { Select } from 'components/Inputs';
import { isEmpty } from 'lodash';

import { GroupProps } from './types';
import { getSelectProps } from './utils';

const MemberGroup = ({
  availableMembers,
  members,
  name,
  updateMethods,
}: GroupProps): ReactElement =>
  !isEmpty([...availableMembers, ...members]) ? (
    <Select
      {...getSelectProps(availableMembers, members, updateMethods)}
      label={name}
      multiple
    />
  ) : (
    <span />
  );

export default MemberGroup;
