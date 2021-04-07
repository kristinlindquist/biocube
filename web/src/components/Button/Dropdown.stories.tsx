import { Meta, Story } from '@storybook/react';

import Dropdown, { DropdownProps } from './Dropdown';

export default {
  title: 'Components/Buttons/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});

Default.args = {};
