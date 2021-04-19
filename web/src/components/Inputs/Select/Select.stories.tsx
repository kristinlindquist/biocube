import { Meta, Story } from '@storybook/react';

import Select, { SelectProps } from './Select';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'A Select Box',
  options: [
    { id: 'value1', name: 'Value #1' },
    { id: 'value2', name: 'Value #2' },
    { id: 'value3', name: 'Value #3' },
  ],
};
