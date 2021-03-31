import { get } from 'lodash';

export const getMember = (members, selections, keyPath = 'name') =>
  members.find((m) => selections.map((s) => s.id).includes(get(m, keyPath)));

export const getMemberOptions = (members) =>
  members.map(({ id, name, title }) => ({
    id: id || name,
    name: id ? name : title,
  }));

export const getSelectProps = (
  members,
  updateMethods,
  key = undefined,
  keyPath = undefined,
  m = undefined,
) => ({
  options: getMemberOptions(members),
  onDelete: (selections) =>
    updateMethods.remove(getMember(members, selections)),
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
});
