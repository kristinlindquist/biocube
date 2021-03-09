import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import moment from 'moment';

import { Page } from 'components/Page';
import { DateRangeProvider } from 'providers';
import MyChart from './MyChart';

const Home = (): ReactElement => (
  <DateRangeProvider
    initial={{
      start: moment().startOf('day').toDate(),
      end: moment().endOf('day').toDate(),
    }}>
    <Page title="Home">
      <Grid container spacing={2}>
        <MyChart />
      </Grid>
    </Page>
  </DateRangeProvider>
);

export default Home;
