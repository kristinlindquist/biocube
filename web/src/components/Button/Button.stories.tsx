import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = { label: 'A Button', variant: 'outlined' };
