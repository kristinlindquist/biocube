import { get, isEmpty, merge } from 'lodash';

import { SelectProps } from 'components/Inputs/Select';
import { SelectOptionType } from 'types';
import { Member, UpdateMethods } from './types';

/**
 * Get CubeJs Members
 */
export const getMembers = (
  members: Member[],
  selections: SelectOptionType[],
  keyPath = 'name',
): Member[] =>
  members.filter((m) => selections.map((s) => s.id).includes(get(m, keyPath)));

/**
 * Get CubeJs Member
 */
export const getMember = (
  members: Member[],
  selections: SelectOptionType[],
  keyPath = 'name',
): Member => {
  const matches = getMembers(members, selections, keyPath);
  return !isEmpty(matches) ? matches[0] : null;
};

/**
 * Turn CubeJs members into select box options
 */
export const getMemberOptions = (members: Member[]): SelectOptionType[] =>
  members.map((m) => ({
    id: m.name,
    name: m.title,
  }));

/**
 * Get properties for query builder select boxes
 */
export const getSelectProps = ({
  availableMembers,
  members,
  updateMethods,
  key,
  keyPath,
  m,
}: {
  availableMembers: Member[];
  members: Member[];
  updateMethods: UpdateMethods;
  key?: string;
  keyPath?: string;
  m?: Member;
}): SelectProps => ({
  defaultValue: m && key ? [m[key]] : null,
  fullWidth: true,
  label: null,
  options: getMemberOptions(availableMembers),
  onDelete: (selections) => {
    const member = getMember(members, selections);
    if (member) {
      updateMethods.remove({ index: member.index });
    }
  },
  onSelect: (selections) => {
    const matches = getMembers(availableMembers, selections, keyPath);
    const existingMatches = getMembers(members, selections, keyPath);
    if (!matches) {
      return null;
    }

    return matches.map((member) => {
      const existing = existingMatches.find(({ name }) => name === member.name);

      if (m || existing) {
        console.log(
          merge(
            m || existing,
            key ? { [key]: keyPath ? get(member, keyPath) : member } : member,
          ),
        );
        return updateMethods.update(
          (m || existing) as { index: number },
          merge(
            m || existing,
            key ? { [key]: keyPath ? get(member, keyPath) : member } : member,
          ),
        );
      }
      console.log(member);
      return updateMethods.add(member);
    });
  },
  // eslint-disable-next-line
  variant: 'outlined' as any,
});
