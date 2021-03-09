import { Meta, Story } from '@storybook/react';

import Picker, { PickerProps } from './Picker';

export default {
  title: 'Components/Date/Picker',
  component: Picker,
} as Meta;

const Template: Story<PickerProps> = (args) => <Picker {...args} />;

export const Default = Template.bind({});

Default.args = {
  date: new Date(),
  label: 'A date',
};
