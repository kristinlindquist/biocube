import { Meta, Story } from '@storybook/react';

import FormDialog, { FormDialogProps } from './FormDialog';

export default {
  title: 'Components/Dialog/Form',
  component: FormDialog,
} as Meta;

const Template: Story<FormDialogProps> = (args) => <FormDialog {...args} />;

export const Default = Template.bind({});

Default.args = {
  fields: [
    { id: 'field1', name: 'A Text Field' },
    {
      id: 'field2',
      options: [
        { id: 'Option1', name: 'Option 1' },
        { id: 'Option2', name: 'Option 2' },
      ],
      name: 'Multi-Select Field',
      type: 'multiple',
    },
    {
      id: 'field3',
      options: [
        { id: 'Option1', name: 'Option 1' },
        { id: 'Option2', name: 'Option 2' },
      ],
      name: 'Single-Select Field',
      type: 'single',
    },
    { id: 'field4', name: 'A Text Box', type: 'text' },
  ],
  title: 'A Dialog Box',
};
