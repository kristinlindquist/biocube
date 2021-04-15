import { ReactElement, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { useCookies } from 'react-cookie';

import { Group } from 'components/Button';
import { Card } from 'components/Card';
import { Bar, Calendar, Line } from 'components/Chart';
import { LongDate } from 'components/Date';
import { useDateRange } from 'contexts';
import { get } from 'lodash';
import { unixYearRange } from 'utils';

import {
  AggType,
  processActivity,
  processDataStream,
  processAggregate,
} from 'components/Chart/utils';

import {
  GetActivityDocument,
  GetDailyDocument,
  GetHeartRateDocument,
  GetSleepDocument,
} from 'gql';

const COOKIE_NAME = process.env.REACT_APP_COOKIE_ID;

const useStyles = makeStyles(() => ({
  group: {
    alignSelf: 'center',
  },
}));

const MyChart = (): ReactElement => {
  const classes = useStyles();
  const [{ [COOKIE_NAME]: cookie }] = useCookies();
  const { accessToken: token } = cookie || {};

  const [aggType, setAggType] = useState(AggType.AVG);
  const [{ start, end }, { setDay }] = useDateRange();

  const { data, error, loading } = useQuery(GetHeartRateDocument, {
    variables: { input: { start, end, token } },
  });

  const { data: sData } = useQuery(GetSleepDocument, {
    variables: { input: { start, end, token } },
  });

  const { data: aData } = useQuery(GetActivityDocument, {
    variables: { input: { ...unixYearRange, token } },
  });

  const { data: dData } = useQuery(GetDailyDocument, {
    variables: { input: { ...unixYearRange, token } },
  });

  return (
    <>
      {dData && (
        <Grid item xs={12}>
          <Card title="BPM Calendar">
            <Box display="flex">
              <Group
                buttons={[
                  { label: 'Average', onClick: () => setAggType(AggType.AVG) },
                  { label: 'Min', onClick: () => setAggType(AggType.MIN) },
                  { label: 'Max', onClick: () => setAggType(AggType.MAX) },
                ]}
                className={classes.group}
                orientation="vertical"
                selected={aggType}
              />
              <Calendar
                data={processAggregate(get(dData, 'getDaily.daily'), aggType)}
                onClick={setDay}
              />
            </Box>
          </Card>
        </Grid>
      )}
      <Grid item xs={12}>
        <Line
          container={Card}
          data={[
            {
              id: 'Waking BPM',
              data: processDataStream(
                get(data, 'getHeartRate.heartRate'),
                get(sData, 'getSleep.sleep'),
                true,
                'awake',
              ),
            },
            {
              id: 'Sleeping BPM',
              data: processDataStream(
                get(data, 'getHeartRate.heartRate'),
                get(sData, 'getSleep.sleep'),
                false,
                'asleep',
              ),
            },
          ]}
          error={error ? { message: error.message } : null}
          loading={loading}
          subtitle={<LongDate date={start} />}
          title="Heart Rate"
        />
      </Grid>
      <Grid item xs={12}>
        <Bar
          container={Card}
          data={processActivity(get(aData, 'getActivity.activity'))}
          error={error ? { message: error.message } : null}
          keys={['walking', 'meditation', 'spinning', 'hiking']}
          loading={loading}
          subtitle={<LongDate date={start} />}
          title="Activity"
        />
      </Grid>
    </>
  );
};

export default MyChart;
