import { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { QueryBuilder, VizState } from '@cubejs-client/react';

import { Card } from 'components/Card';
import { ChartRenderer } from 'components/Chart';
import MemberGroup from './MemberGroup';
import FilterGroup from './FilterGroup';
import TimeGroup from './TimeGroup';
import SelectChartType from './SelectChartType';

export interface QbProps {
  /**
   * viz state, whatever that is
   */
  vizState: VizState;
  /**
   * cube API
   */
  // eslint-disable-next-line
  cubejsApi?: any;
  /**
   * set viz state
   */
  setVizState?: (vizState: VizState) => void;
}

const useStyles = makeStyles((theme) => ({
  query: {
    paddingBottom: theme.spacing(3),
  },
}));

const ExploreQueryBuilder = ({
  vizState,
  cubejsApi,
  setVizState,
}: QbProps): ReactElement => {
  const classes = useStyles();

  return (
    <QueryBuilder
      vizState={vizState}
      setVizState={setVizState}
      cubejsApi={cubejsApi}
      wrapWithQueryRenderer={false}
      render={({
        measures,
        availableMeasures,
        updateMeasures,
        dimensions,
        availableDimensions,
        updateDimensions,
        segments,
        availableSegments,
        updateSegments,
        filters,
        updateFilters,
        timeDimensions,
        availableTimeDimensions,
        updateTimeDimensions,
        isQueryPresent,
        chartType,
        updateChartType,
        validatedQuery,
      }) => (
        <Grid container spacing={2}>
          <Grid className={classes.query} item xs={12}>
            <Card title="Build yer query">
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}>
                  <MemberGroup
                    name="Measure"
                    availableMembers={availableMeasures}
                    members={measures}
                    updateMethods={updateMeasures}
                  />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <MemberGroup
                    name="Dimension"
                    availableMembers={availableDimensions}
                    members={dimensions}
                    updateMethods={updateDimensions}
                  />
                </Grid>
                <Grid item xs={6} sm={4}>
                  <MemberGroup
                    name="Segment"
                    availableMembers={availableSegments}
                    members={segments}
                    updateMethods={updateSegments}
                  />
                </Grid>
                <TimeGroup
                  name="Time"
                  availableMembers={availableTimeDimensions}
                  members={timeDimensions}
                  updateMethods={updateTimeDimensions}
                />
                {isQueryPresent &&
                  false && [
                    <FilterGroup
                      name="Filter"
                      availableMembers={[
                        ...availableDimensions,
                        ...availableMeasures,
                      ]}
                      members={filters}
                      updateMethods={updateFilters}
                    />,
                  ]}
              </Grid>
            </Card>
          </Grid>
          {isQueryPresent ? (
            <Grid item xs={12}>
              <Card
                title="A Chart"
                headerAction={
                  <SelectChartType
                    chartType={chartType}
                    updateChartType={updateChartType}
                  />
                }>
                <ChartRenderer
                  cubejsApi={cubejsApi}
                  vizState={{ query: validatedQuery, chartType }}
                />
              </Card>
            </Grid>
          ) : (
            <Typography variant="h5">
              Choose a measure or dimension to get started
            </Typography>
          )}
        </Grid>
      )}
    />
  );
};

export default ExploreQueryBuilder;
