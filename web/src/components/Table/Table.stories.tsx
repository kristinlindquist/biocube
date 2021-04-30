import { Meta, Story } from '@storybook/react';

import Table, { TableProps } from './Table';

export default {
  title: 'Components/Table/Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  columns: [
    { id: 'id', name: 'Id', type: 'number' },
    { id: 'name', name: 'Name', type: 'string' },
    { id: 'description', name: 'Description', type: 'text' },
    { id: 'collapse', name: 'Collapsed Part', type: 'TABLE' },
  ],
  rows: [
    {
      id: 1,
      name: 'Besty Sue',
      description: 'This person is a fabulous human.',
      collapse: [{ key1: 'value1', key2: 'value2' }],
      url: '/',
    },
    {
      id: 2,
      name: 'Nebbo Frum',
      description: 'This is also a fabulous human.',
      collapse: [{ key1: 'value3', key2: 'value4' }],
      url: '/',
    },
  ],
  showEditOverride: true,
};
