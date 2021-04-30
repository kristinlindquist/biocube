import { Meta, Story } from '@storybook/react';

import MenuButton, { MenuButtonProps } from './MenuButton';

export default {
  title: 'Components/Buttons/Menu',
  component: MenuButton,
} as Meta;

// options: Array<{ onClick: () => void; name: string }>;
const Template: Story<MenuButtonProps> = (args) => <MenuButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: [
    { name: 'Choice #1', onClick: () => {} },
    { name: 'Choice #2', onClick: () => {} },
  ],
};
