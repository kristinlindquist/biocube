import { ReactChild, ReactElement, ReactFragment, ReactPortal } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, CssBaseline, LinearProgress } from '@material-ui/core';

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
  error?: string | ErrorMessage | null;
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
  loading,
  title = 'Phenotype.io',
}: PageProps): ReactElement => {
  const classes = useStyles();

  return (
    <Box mb={10}>
      <CssBaseline />
      {loading && <LinearProgress />}
      <Header title={title} />
      <div className={classes.offset} />
      <Container>{children}</Container>
    </Box>
  );
};

export default Page;
