import { ReactChild, ReactElement, ReactFragment, ReactPortal } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, Box, Container, LinearProgress } from '@material-ui/core';

import { Header } from 'components/Header';
import { ErrorMessage } from 'types';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

export interface PageProps {
  /**
   * Page contents
   */
  children: boolean | ReactChild | ReactFragment | ReactPortal;
  /**
   * error
   */
  error?: ErrorMessage | null;
  /**
   * Is page loading?
   */
  loading?: boolean;
  /**
   * Main page title
   */
  title: string;
}

/**
 * A basic page with a header.
 */
const Page = ({
  children,
  error,
  loading = false,
  title = 'Biocube',
}: PageProps): ReactElement => {
  const classes = useStyles();

  return (
    <Box mb={10}>
      {loading && <LinearProgress />}
      <Header title={title} />
      {error && <Alert severity="error">{error.message}</Alert>}
      <div className={classes.offset} />
      <Container>{children}</Container>
    </Box>
  );
};

export default Page;
