import { get, isEmpty, merge } from 'lodash';

import { DropdownProps } from 'components/Button/Dropdown';
import { SelectProps } from 'components/Inputs/Select';
import { SelectOptionType } from 'types';
import { Member, UpdateMethods } from './types';

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
 * Turn CubeJs members into select box options
 */
export const getMemberOptions = (members: Member[]): SelectOptionType[] =>
  members.map((m) => ({
    id: m.name,
    name: m.title,
  }));

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
    const existing = members.find(({ name }) => name === member.name);

    if (m) {
      return updateMethods.update(
        m as { index: number },
        merge(
          m,
          key
            ? {
                [key]: keyPath ? get(member, keyPath) : member,
              }
            : member,
        ),
      );
    }

    if (!existing) {
      return updateMethods.add(key ? { [key]: member } : member);
    }
    return member;
  });
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
  m = null,
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
}: {
  availableMembers: Member[];
  members: Member[];
  updateMethods: UpdateMethods;
  key?: string;
  keyPath?: string;
  m?: Member;
}): DropdownProps => ({
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
