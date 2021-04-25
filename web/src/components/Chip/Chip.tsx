import { ReactElement } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import {
  Chip as MaterialChip,
  ChipProps as MaterialChipProps,
} from '@material-ui/core';

import { IdType } from 'types';

export type ChipProps = {
  /**
   * chip id
   */
  id?: IdType;
  /**
   * chip name / label
   */
  name: string;
  /**
   * chip url destination
   */
  url?: string;
} & Partial<MaterialChipProps> &
  Partial<LinkProps>;

const Chip = ({ id, name, url, ...props }: ChipProps): ReactElement => (
  <MaterialChip
    clickable={Boolean(url)}
    color={url ? 'primary' : undefined}
    component={url ? Link : undefined}
    label={name}
    onClick={(e) => e.stopPropagation()}
    size="small"
    sx={{ mr: 0.5, mt: 0.5 }}
    to={url}
    {...props}
  />
);

export default Chip;
