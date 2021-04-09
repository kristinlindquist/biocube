import { ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';
import { pickBy } from 'lodash';

import { Card } from 'components/Card';
import { Chip } from 'components/Chip';
import { DataGrid, Table } from 'components/Table';
import { KeyValuePairs } from 'types';

export interface ContentProps {
  /**
   * data
   */
  data: KeyValuePairs;
  /**
   * how the data should be presented
   */
  dataMap?: {
    [id: string]: {
      name: string;
      type: 'CHIPS' | 'DATAGRID' | 'TABLE' | 'TITLE' | 'TYPOGRAPHY';
      props: KeyValuePairs;
    };
  };
  /**
   * Delete mutation
   */
  deleteMutation?: (input: { [key: string]: unknown }) => void;
  /**
   * Mutation function
   */
  mutation?: (input: { [key: string]: unknown }) => void;
}

const asArray = (value) => (Array.isArray(value) ? value : [value]);

const getElement = (
  value,
  id,
  { name = null, type = '', props = {} },
): ReactElement | ReactElement[] => {
  switch (type) {
    case 'TYPOGRAPHY':
      return <Typography {...props}>{value}</Typography>;
    case 'CHIPS':
      return (
        <>
          {name && (
            <Typography sx={{ display: 'inline', mr: 1 }} variant="h6">
              {name}:
            </Typography>
          )}
          {asArray(value).map((v) => (
            <Chip key={`${id}-${v.name}`} {...v} />
          ))}
        </>
      );
    case 'DATAGRID':
      return <DataGrid {...props} hideFooter rows={value} />;
    case 'TABLE':
      return <Table {...props} rows={value} />;
    default:
      return null;
  }
};

const Content = ({ data, dataMap }: ContentProps): ReactElement => {
  const titleKey = Object.keys(pickBy(dataMap, (dm) => dm.type === 'TITLE'));

  return (
    <Card title={titleKey ? data[titleKey[0]] : undefined}>
      {Object.entries(data)
        .map(([k, v]) => (
          <Box key={k} sx={{ mb: 2 }}>
            {getElement(v, k, dataMap[k] || {})}
          </Box>
        ))
        .filter((e) => e)
        .reverse()}
    </Card>
  );
};

export default Content;
