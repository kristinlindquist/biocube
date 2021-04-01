import { get } from 'lodash';

import { SelectProps } from 'components/Inputs/Select';
import { SelectOptionType } from 'types';
import { Member, UpdateMethods } from './types';

/**
 * Get CubeJs Member
 */
export const getMember = (
  members: Member[],
  selections: SelectOptionType[],
  keyPath = 'name',
): Member =>
  members.find((m) => selections.map((s) => s.id).includes(get(m, keyPath)));

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
  members: Member[],
  updateMethods: UpdateMethods,
  key = undefined,
  keyPath = undefined,
  m = undefined,
): SelectProps => ({
  defaultValue: members.filter((m2) => m2.isDefault).map(({ name }) => name),
  fullWidth: true,
  label: null,
  options: getMemberOptions(members),
  onDelete: (selections) =>
    updateMethods.remove({
      index: members.indexOf(getMember(members, selections)),
    }),
  onSelect: (selections) => {
    const member = getMember(members, selections, keyPath);

    if (!member) {
      return null;
    }

    return m
      ? updateMethods.update(m, {
          ...m,
          [key]: keyPath ? get(member, keyPath) : member,
        })
      : updateMethods.add({ granularity: 'day', ...member });
  },
  // eslint-disable-next-line
  variant: 'outlined' as any,
});
