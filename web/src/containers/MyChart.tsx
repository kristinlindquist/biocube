import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { useCookies } from 'react-cookie';
import moment from 'moment';

import { ChartRenderer } from 'components/Chart';
import {
  GetDashboardGraphsDocument as GetGraphs,
  SyncGoogleFitDocument as SyncGoogleFit,
} from 'gql';
import { unwrapGqlData } from 'utils';

const COOKIE_NAME = process.env.REACT_APP_COOKIE_ID;

const dateRange = {
  start: moment().subtract(30, 'days').startOf('days').toDate(),
  end: moment().endOf('days').toDate(),
};

const MyChart = (): ReactElement => {
  const [{ [COOKIE_NAME]: cookie }] = useCookies();
  const { accessToken: token } = cookie || {};

  // TODO: move
  useQuery(SyncGoogleFit, {
    variables: {
      input: {
        ...dateRange,
        token,
      },
    },
  });

  const { data } = useQuery(GetGraphs, {
    variables: { input: {} },
  });

  const charts = unwrapGqlData(data) || {};

  return (
    <Grid container spacing={2}>
      {charts.map(({ id, description, name, vizState }) => (
        <Grid item key={id} xs={12}>
          <ChartRenderer
            id={id}
            description={description}
            name={name}
            vizState={vizState}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MyChart;
