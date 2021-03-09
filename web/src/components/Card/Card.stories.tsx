import { Meta, Story } from '@storybook/react';

import Card, { CardProps } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => (
  <Card {...args}>This card content</Card>
);

export const Default = Template.bind({});

Default.args = {
  title: 'This is a title',
};
