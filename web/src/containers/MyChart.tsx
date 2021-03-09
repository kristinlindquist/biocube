import { ReactElement, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { Box, Grid } from '@material-ui/core';

import { Group } from 'components/Button';
import { Card } from 'components/Card';
import { Bar, Calendar, Line } from 'components/Chart';
import { LongDate } from 'components/Date';
import { useDateRange } from 'contexts';
import { unixYearRange } from 'utils';

import {
  AggType,
  processActivity,
  processHrStream,
  processHrAggregate,
} from 'components/Chart/utils';

import {
  GET_ACTIVITY,
  GET_DAILY,
  GET_HEART_RATE,
  GET_SLEEP,
} from 'gql/queries';

const useStyles = makeStyles(() => ({
  group: {
    alignSelf: 'center',
  },
}));

const MyChart = (): ReactElement => {
  const classes = useStyles();

  const [aggType, setAggType] = useState(AggType.AVG);
  const [{ start, end }, { setDay }] = useDateRange();

  const { loading, error, data } = useQuery(GET_HEART_RATE, {
    variables: { start: start.getTime(), end: end.getTime() },
  });

  const { data: sData } = useQuery(GET_SLEEP, {
    variables: { start: start.getTime(), end: end.getTime() },
  });

  const { data: aData } = useQuery(GET_ACTIVITY, {
    variables: unixYearRange,
  });

  const { data: cData } = useQuery(GET_DAILY, {
    variables: unixYearRange,
  });

  return (
    <>
      {cData && (
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
                data={processHrAggregate(cData, aggType)}
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
              data: processHrStream(data, sData, true, 'awake'),
            },
            {
              id: 'Sleeping BPM',
              data: processHrStream(data, sData, false, 'asleep'),
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
          data={processActivity(aData)}
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
