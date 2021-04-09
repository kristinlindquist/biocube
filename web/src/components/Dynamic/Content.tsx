import { ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';

import { Chip } from 'components/Chip';
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
    [key: string]: { type: 'CHIPS' | 'TYPOGRAPHY'; props: any };
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
  key,
  { type = '', props = {} },
): ReactElement | ReactElement[] => {
  switch (type) {
    case 'TYPOGRAPHY':
      return (
        <Typography key={key} {...props}>
          {value}
        </Typography>
      );
    case 'CHIPS':
      return asArray(value).map((v) => (
        <Chip key={`${key}-${v.name}`} {...v} />
      ));
    default:
      return <span />;
  }
};

const Content = ({ data, dataMap }: ContentProps): ReactElement => (
  <Box>
    {Object.entries(data)
      .map(([k, v]) => getElement(v, k, dataMap[k] || {}))
      .reverse()}
  </Box>
);

export default Content;
