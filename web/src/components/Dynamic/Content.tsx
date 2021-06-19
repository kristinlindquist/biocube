import { ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';
import { get, isEmpty } from 'lodash';

import { Card } from 'components/Card';
import { Chip } from 'components/Chip';
import { FormDialog as Dialog } from 'components/Dialog';
import { IconButton } from 'components/Button';
import { Table } from 'components/Table';
import {
  ContentDefType,
  IdType,
  KeyValuePairs,
  RowType,
  TypographyVariant,
} from 'types';
import {
  asArray,
  fieldFromContentType,
  sortByColumn,
  undefOrTrue,
} from 'utils';

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

/**
 * Add a title to a sub-component
 */
const withTitle = (
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

/**
 * Get sub-component by type
 */
const subComponent = (
  id: IdType,
  value: KeyValuePairs,
  { name = null, type = '', props = {} },
): ReactElement | ReactElement[] => {
  const components = {
    CHIPS: withTitle(
      asArray(value).map((v) => (
        <Chip key={`${id}-${v.name}`} sx={{ mr: 0.5 }} {...v} />
      )),
      name,
    ),
    TABLE: <Table {...props} id={id} rows={value as RowType[]} />,
  };
  return components[type];
};

/**
 * A metadata-driven content block
 */
const Content = ({ data, dataMap, mutation }: ContentProps): ReactElement => {
  const titleKey = get(
    dataMap.find(({ type }) => type === 'TITLE'),
    'id',
  );
  const subtitleKey = get(
    dataMap.find(({ type }) => type === 'SUBTITLE'),
    'id',
  );

  return (
    <Card
      headerAction={
        mutation ? (
          <Dialog
            openButton={<IconButton label="Edit" size="small" />}
            fields={dataMap
              .filter((c) => undefOrTrue(c.create))
              .map((col) => ({
                ...col,
                type: fieldFromContentType(col.type),
              }))}
            onSubmit={(input) => mutation(input)}
            sx={{ ml: 'auto' }}
            title="Edit"
            values={data}
          />
        ) : undefined
      }
      subtitle={subtitleKey ? data[subtitleKey] : undefined}
      title={titleKey ? data[titleKey] : undefined}>
      {sortByColumn(data, dataMap)
        .map(([k, v]) => {
          const col = dataMap.find(({ id }) => id === k);
          return !isEmpty(v) ? (
            <Box
              key={k}
              sx={{ mb: 1 }}
              {...(col && col.props ? col.props.sx : {})}>
              {subComponent(k, v, col || {})}
            </Box>
          ) : null;
        })
        .filter((e) => e)}
    </Card>
  );
};

export default Content;
