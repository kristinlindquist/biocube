import { Meta, Story } from '@storybook/react';

import Fab, { FabProps } from './Fab';

export default {
  title: 'Components/Buttons/Fab',
  component: Fab,
} as Meta;

const Template: Story<FabProps> = (args) => <Fab {...args} />;

export const Default = Template.bind({});

Default.args = { position: 'relative' };
