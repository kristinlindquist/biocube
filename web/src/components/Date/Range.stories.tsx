import { Meta, Story } from '@storybook/react';

import { DateRangeProvider } from 'providers';
import Range, { RangeProps } from './Range';

export default {
  title: 'Components/Date/Range',
  component: Range,
  decorators: [
    (Story2) => (
      <DateRangeProvider
        initial={{
          start: new Date(new Date().getTime() - 1000 * 60 * 60 * 8),
          end: new Date(),
        }}>
        <Story2 />
      </DateRangeProvider>
    ),
  ],
} as Meta;

const Template: Story<RangeProps> = (args) => <Range {...args} />;

export const Default = Template.bind({});

Default.args = {};
