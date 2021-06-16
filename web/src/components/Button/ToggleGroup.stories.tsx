import { Meta, Story } from '@storybook/react';

import ToggleGroup, { ToggleGroupProps } from './ToggleGroup';

export default {
  title: 'Components/Buttons/ToggleGroup',
  component: ToggleGroup,
} as Meta;

const Template: Story<ToggleGroupProps> = (args) => <ToggleGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttons: [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }],
};
