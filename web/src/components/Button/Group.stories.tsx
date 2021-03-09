import { Meta, Story } from '@storybook/react';

import Group, { GroupProps } from './Group';

export default {
  title: 'Components/Buttons/Group',
  component: Group,
} as Meta;

const Template: Story<GroupProps> = (args) => <Group {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttons: [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }],
};
