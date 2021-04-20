import { ReactChild, ReactElement, ReactFragment, ReactPortal } from 'react';
import {
  Alert,
  Box,
  Card as MaterialCard,
  CardActions,
  CardContent,
  CardHeader,
  LinearProgress,
} from '@material-ui/core';

import { ErrorMessage } from 'types';

export interface CardProps {
  /**
   * Card actions
   * Renders in footer
   */
  actions?: Array<ReactElement>;
  /**
   * Main card content
   */
  children: boolean | ReactChild | ReactFragment | ReactPortal;
  /**
   * Error
   */
  error?: ErrorMessage;
  /**
   * Header action
   */
  headerAction?: ReactElement;
  /**
   * is card content loading?
   */
  loading?: boolean;
  /**
   * Card subtitle
   */
  subtitle?: string | ReactElement;
  /**
   * Card title
   */
  title?: string | ReactElement;
}

/**
 * A wrapper around Material UI Card
 */
const Card = ({
  actions,
  children,
  error,
  headerAction,
  loading,
  subtitle,
  title,
  ...props
}: CardProps): ReactElement => (
  <MaterialCard>
    {error && <Alert severity="error">{error.message}</Alert>}
    {loading && <LinearProgress />}
    <CardHeader
      action={headerAction}
      subheader={subtitle}
      title={title}
      titleTypographyProps={{ variant: 'h3' }}
    />
    <CardContent>
      <Box {...props}>{children}</Box>
    </CardContent>
    <CardActions>{actions}</CardActions>
  </MaterialCard>
);

export default Card;
