import { ReactChild, ReactElement, ReactFragment, ReactPortal } from 'react';
import {
  Box,
  Card as MaterialCard,
  CardActions,
  CardContent,
  CardHeader,
} from '@material-ui/core';

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
   * Header action
   */
  headerAction?: ReactElement;
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
  headerAction,
  subtitle,
  title,
  ...props
}: CardProps): ReactElement => (
  <MaterialCard>
    <CardHeader action={headerAction} subheader={subtitle} title={title} />
    <CardContent>
      <Box {...props}>{children}</Box>
    </CardContent>
    <CardActions>{actions}</CardActions>
  </MaterialCard>
);

export default Card;
