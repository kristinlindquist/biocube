import { Meta, Story } from '@storybook/react';

import IconButton, { IconButtonProps } from './IconButton';

export default {
  title: 'Components/Buttons/Icon',
  component: IconButton,
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});

Default.args = {};
