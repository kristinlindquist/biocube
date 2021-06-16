import { Meta, Story } from '@storybook/react';

import OverflowMenu, { OverflowMenuProps } from './OverflowMenu';

export default {
  title: 'Components/Buttons/OverflowMenu',
  component: OverflowMenu,
} as Meta;

const Template: Story<OverflowMenuProps> = (args) => <OverflowMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: [
    { name: 'Choice #1', onClick: () => {} },
    { name: 'Choice #2', onClick: () => {} },
  ],
};
