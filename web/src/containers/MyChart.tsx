import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
// import { useCookies } from 'react-cookie';

// import {
//   GetActivityDocument,
//   GetHeartRateDocument,
//   GetSleepDocument,
// } from 'gql';

import { ChartRenderer } from 'components/Chart';
import { GetDashboardGraphsDocument as GetGraphs } from 'gql';
import { unwrapGqlData } from 'utils';

// const COOKIE_NAME = process.env.REACT_APP_COOKIE_ID;

const MyChart = (): ReactElement => {
  // const [{ [COOKIE_NAME]: cookie }] = useCookies();
  // const { accessToken: token } = cookie || {};

  // const { data, error, loading } = useQuery(GetHeartRateDocument, {
  //   variables: { input: { ...unixYearRange, token } },
  // });

  // const { data: sData } = useQuery(GetSleepDocument, {
  //   variables: { input: { ...unixYearRange, token } },
  // });

  // const { data: aData } = useQuery(GetActivityDocument, {
  //   variables: { input: { ...unixYearRange, token } },
  // });

  const { data } = useQuery(GetGraphs, {
    variables: { input: {} },
  });

  return (
    <Grid item xs={12}>
      <ChartRenderer vizState={unwrapGqlData(data).vizState} />
    </Grid>
  );
};

export default MyChart;
