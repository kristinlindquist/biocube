import { Meta, Story } from '@storybook/react';

import DataGrid, { DataGridProps } from './DataGrid';

export default {
  title: 'Components/Table/DataGrid',
  component: DataGrid,
} as Meta;

const Template: Story<DataGridProps> = (args) => <DataGrid {...args} />;

export const Default = Template.bind({});

Default.args = {
  columns: [
    { id: 'id', name: 'Id', type: 'number' },
    { id: 'name', name: 'Name', type: 'string' },
    { id: 'description', name: 'Description', type: 'text' },
  ],
  rows: [
    {
      id: 1,
      name: 'Besty Sue',
      description: 'This is a little bit about Betsy Sue',
    },
    {
      id: 2,
      name: 'Bobby Boo',
      description: 'This is a little bit about Bobby Boo',
    },
  ],
};
