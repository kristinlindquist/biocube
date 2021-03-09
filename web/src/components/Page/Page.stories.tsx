import { Meta, Story } from '@storybook/react';

import Page, { PageProps } from './Page';

export default {
  title: 'Components/Page',
  component: Page,
} as Meta;

const Template: Story<PageProps> = (args) => (
  <Page {...args}>This is a child.</Page>
);

export const Default = Template.bind({});

Default.args = {
  title: 'This is a title',
};
