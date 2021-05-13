import { get, isEmpty } from 'lodash';

import { DropdownProps } from 'components/Button/Dropdown';
import { SelectProps } from 'components/Inputs/Select';
import { SelectOptionType } from 'types';
import { Member, SelectInputProps } from './types';

/**
 * Get CubeJs Members
 */
export const getMembers = (
  members: Member[],
  selection: SelectOptionType | SelectOptionType[],
  keyPath = 'name',
): Member[] =>
  members.filter((m) =>
    (Array.isArray(selection) ? selection : [selection])
      .map((s) => s.id)
      .includes(get(m, keyPath)),
  );

/**
 * Get CubeJs Member
 */
export const getMember = (
  members: Member[],
  selection: SelectOptionType | SelectOptionType[],
  keyPath = 'name',
): Member => {
  const matches = getMembers(members, selection, keyPath);
  return !isEmpty(matches) ? matches[0] : null;
};

/**
 * Get count of occurrences of value in an array
 */
const getInstanceCount = (array, value: string | number): number =>
  array.reduce((n, val) => n + (val === value), 0);

/**
 * Turn CubeJs members into select box options
 */
export const getMemberOptions = (members: Member[]): SelectOptionType[] => {
  const titles = members.map(({ shortTitle }) => shortTitle);

  return members.map(({ name, shortTitle, title }) => ({
    id: name,
    name:
      getInstanceCount(titles, shortTitle) < 2 ? shortTitle : title || title,
  }));
};

const onSelect = ({
  selections,
  available,
  members,
  key,
  keyPath,
  updateMethods,
  m,
}) => {
  const matches = getMembers(available, selections, keyPath);

  if (!matches) {
    return null;
  }

  return matches.map((member) => {
    if (m) {
      return updateMethods.update(m as { index: number }, {
        ...m,
        ...(key
          ? {
              [key]: keyPath ? get(member, keyPath) : member,
            }
          : member),
      });
    }

    return !members.find(({ name }) => name === member.name) // nx
      ? updateMethods.add(key ? { [key]: member } : member)
      : member;
  });
};

const getDefault = (m, key, selection) => {
  if (selection) {
    return Array.isArray(selection) ? selection : [selection];
  }
  return m && key && m[key] ? [m[key].name || m[key]] : null;
};

/**
 * Get properties for query builder select boxes
 */
export const getSelectProps = ({
  availableMembers,
  members,
  updateMethods,
  key,
  keyPath,
  selection,
  m = null,
}: SelectInputProps): SelectProps => ({
  defaultValue: getDefault(m, key, selection),
  fullWidth: true,
  label: null,
  options: getMemberOptions(availableMembers),
  onDelete: (selections) => {
    const member = getMember(members, selections);
    if (member) {
      updateMethods.remove({ index: member.index });
    }
  },
  onSelect: (selections) =>
    onSelect({
      selections,
      available: availableMembers,
      members,
      key,
      keyPath,
      updateMethods,
      m,
    }),
  // eslint-disable-next-line
  variant: 'outlined' as any,
});

/**
 * Get properties for query builder dropdown button
 */
export const getDropdownProps = ({
  availableMembers,
  members,
  updateMethods,
  key,
  keyPath,
  m,
}: SelectInputProps): DropdownProps => ({
  label: null,
  options: getMemberOptions(availableMembers),
  onSelect: (selections) => [
    onSelect({
      selections,
      available: availableMembers,
      members,
      key,
      keyPath,
      updateMethods,
      m,
    }),
  ],
});
