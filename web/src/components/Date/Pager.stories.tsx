import { Meta, Story } from '@storybook/react';

import { DateRangeProvider } from 'providers';
import Pager, { PagerProps } from './Pager';

export default {
  title: 'Components/Date/Pager',
  component: Pager,
  decorators: [
    (Story2) => (
      <DateRangeProvider
        initial={{
          start: new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 2),
          end: new Date(),
        }}>
        <Story2 />
      </DateRangeProvider>
    ),
  ],
} as Meta;

const Template: Story<PagerProps> = (args) => <Pager {...args} />;

export const Default = Template.bind({});

Default.args = {};
