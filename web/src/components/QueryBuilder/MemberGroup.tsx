import { Select } from 'components/Inputs';

import { getSelectProps } from './utils';

export interface MemberGroupProps {
  /**
   * Options
   */
  members?: any[];
  availableMembers?: any[];
  addMemberName?: string;
  updateMethods: {
    add: (member: any) => void;
    update: (member: { index: number }, updateWith: any) => void;
    remove: (member: { index: number }) => void;
  };
}

const MemberGroup = ({
  members,
  availableMembers,
  addMemberName,
  updateMethods,
}: MemberGroupProps) => (
  <Select
    defaultValue={members}
    label={addMemberName}
    multiple
    {...getSelectProps(availableMembers, updateMethods)}
  />
);

export default MemberGroup;
