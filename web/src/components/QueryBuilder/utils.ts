import { get, isEmpty } from 'lodash';

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
export const getSelectProps = (
  availableMembers: Member[],
  members: Member[],
  updateMethods: UpdateMethods,
  key = undefined,
  keyPath = undefined,
  m = undefined,
): SelectProps => ({
  defaultValue: [],
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
        return updateMethods.update(m || existing, {
          ...(m || existing),
          ...(key
            ? { [key]: keyPath ? get(member, keyPath) : member }
            : member),
        });
      }
      return updateMethods.add({ granularity: 'day', ...member });
    });
  },
  // eslint-disable-next-line
  variant: 'outlined' as any,
});
