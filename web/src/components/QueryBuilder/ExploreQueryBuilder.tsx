import { Card, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { QueryBuilder, VizState } from '@cubejs-client/react';

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
}: // chartExtra,
QbProps) => {
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
        // cubejsApi,
      }) => [
        <Grid className={classes.query} container key="1" spacing={2}>
          <Grid item xs={6} sm={4}>
            <MemberGroup
              addMemberName="Measure"
              availableMembers={availableMeasures}
              members={measures}
              updateMethods={updateMeasures}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <MemberGroup
              addMemberName="Dimension"
              availableMembers={availableDimensions}
              members={dimensions}
              updateMethods={updateDimensions}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <MemberGroup
              addMemberName="Segment"
              availableMembers={availableSegments}
              members={segments}
              updateMethods={updateSegments}
            />
          </Grid>
          <TimeGroup
            addMemberName="Time"
            availableMembers={availableTimeDimensions}
            members={timeDimensions}
            title="Time"
            updateMethods={updateTimeDimensions}
          />
          {isQueryPresent &&
            false && [
              <FilterGroup
                addMemberName="Filter"
                availableMembers={[
                  ...availableDimensions,
                  ...availableMeasures,
                ]}
                members={filters}
                updateMethods={updateFilters}
              />,
            ]}
        </Grid>,
        <Grid container>
          {isQueryPresent ? (
            [
              <SelectChartType
                chartType={chartType}
                updateChartType={updateChartType}
              />,
              <Card>
                <ChartRenderer
                  cubejsApi={cubejsApi}
                  vizState={{ query: validatedQuery, chartType }}
                />
              </Card>,
            ]
          ) : (
            <Typography variant="h5">
              Choose a measure or dimension to get started
            </Typography>
          )}
        </Grid>,
      ]}
    />
  );
};

export default ExploreQueryBuilder;
