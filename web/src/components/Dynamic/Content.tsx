import { ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';

import { Card } from 'components/Card';
import { Chip } from 'components/Chip';
import { DataGrid, Table } from 'components/Table';
import { ContentDefType, KeyValuePairs, TypographyVariant } from 'types';
import { sortByColumn } from 'utils';

export interface ContentProps {
  /**
   * data
   */
  data: KeyValuePairs;
  /**
   * how the data should be presented
   */
  dataMap?: ContentDefType[];
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

const addTitle = (
  component: ReactElement | ReactElement[],
  title: string,
  variant: TypographyVariant = 'h6',
) => (
  <>
    <Typography sx={{ display: 'inline', mr: 1 }} variant={variant}>
      {title}
    </Typography>
    {component}
  </>
);

const getElement = (
  value,
  id,
  { name = null, type = '', props = {} },
): ReactElement | ReactElement[] => {
  switch (type) {
    case 'TYPOGRAPHY':
      return <Typography {...props}>{value}</Typography>;
    case 'CHIPS':
      return addTitle(
        asArray(value).map((v) => <Chip key={`${id}-${v.name}`} {...v} />),
        name,
      );
    case 'DATAGRID':
      return addTitle(<DataGrid {...props} hideFooter rows={value} />, name);
    case 'TABLE':
      return addTitle(<Table {...props} rows={value} />, name, 'h4');
    default:
      return null;
  }
};

const Content = ({ data, dataMap }: ContentProps): ReactElement => {
  const titleKey = dataMap.find(({ type }) => type === 'TITLE').id;
  const subtitleKey = dataMap.find(({ type }) => type === 'SUBTITLE').id;

  return (
    <Card
      subtitle={subtitleKey ? data[subtitleKey] : undefined}
      title={titleKey ? data[titleKey] : undefined}>
      {sortByColumn(data, dataMap)
        .map(([k, v]) => (
          <Box key={k} sx={{ mb: 2 }}>
            {getElement(v, k, dataMap.find(({ id }) => id === k) || {})}
          </Box>
        ))
        .filter((e) => e)}
    </Card>
  );
};

export default Content;
