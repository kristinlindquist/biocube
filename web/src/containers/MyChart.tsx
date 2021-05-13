import { ReactElement, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { useCookies } from 'react-cookie';
import moment from 'moment';

import { ChartRenderer } from 'components/Chart';
import { QueryBuilder } from 'components/QueryBuilder';
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
  const [showingQb, setShowingQb] = useState(false);
  const [, setVizState] = useState({});
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

  return charts.map(({ id, description, name, vizState }) => (
    <Grid item key={id} xs={12}>
      {showingQb === id ? (
        <QueryBuilder
          id={id}
          close={() => setShowingQb(null)}
          description={description}
          name={name}
          open={() => setShowingQb(id)}
          query={vizState.query}
          vizState={vizState}
          setVizState={setVizState}
        />
      ) : (
        <ChartRenderer
          id={id}
          description={description}
          name={name}
          open={() => setShowingQb(id)}
          vizState={vizState}
        />
      )}
    </Grid>
  ));
};

export default MyChart;
