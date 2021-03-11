import { ReactElement, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

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
  useGetActivityQuery,
  useGetDailyQuery,
  useGetHeartRateQuery,
  useGetSleepQuery,
} from 'gql';

const useStyles = makeStyles(() => ({
  group: {
    alignSelf: 'center',
  },
}));

const MyChart = (): ReactElement => {
  const classes = useStyles();

  const [aggType, setAggType] = useState(AggType.AVG);
  const [{ start, end }, { setDay }] = useDateRange();

  const { data, error, loading } = useGetHeartRateQuery({
    variables: { input: { start, end } },
  });

  const { data: sData } = useGetSleepQuery({
    variables: { input: { start, end } },
  });

  const { data: aData } = useGetActivityQuery({
    variables: { input: unixYearRange },
  });

  const { data: dData } = useGetDailyQuery({
    variables: { input: unixYearRange },
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
          keys={['walking', 'meditation', 'spinning']}
          loading={loading}
          subtitle={<LongDate date={start} />}
          title="Activity"
        />
      </Grid>
    </>
  );
};

export default MyChart;
