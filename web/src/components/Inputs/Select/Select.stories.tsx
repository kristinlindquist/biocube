import { Meta, Story } from '@storybook/react';

import Select, { SelectProps } from './Select';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Select Box',
  options: [
    { value: 'value1', label: 'Value #1' },
    { value: 'value2', label: 'Value #2' },
    { value: 'value3', label: 'Value #3' },
  ],
};
