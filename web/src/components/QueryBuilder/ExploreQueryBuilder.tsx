import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { QueryBuilder, VizState } from '@cubejs-client/react';
import { CubejsApi } from '@cubejs-client/core';
import { uniq } from 'lodash';

import { Card } from 'components/Card';
import { ChartRenderer } from 'components/Chart';
import MemberGroup from './MemberGroup';
import FilterGroup from './FilterGroup';
import TimeGroup from './TimeGroup';
import stateChangeHeuristics from './stateChangeHeuristics';

export interface QbProps {
  /**
   * viz state, whatever that is
   */
  vizState: VizState;
  /**
   * cube API
   */
  cubejsApi?: CubejsApi;
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
      cubejsApi={cubejsApi}
      vizState={vizState}
      setVizState={setVizState}
      stateChangeHeuristics={stateChangeHeuristics}
      wrapWithQueryRenderer={false}
      render={({
        availableDimensions,
        availableMeasures,
        availableSegments,
        availableTimeDimensions,
        chartType,
        dimensions,
        filters,
        isQueryPresent,
        measures,
        segments,
        timeDimensions,
        updateChartType,
        updateDimensions,
        updateFilters,
        updateMeasures,
        updateSegments,
        updateTimeDimensions,
        validatedQuery,
      }) => (
        <Grid container spacing={2}>
          <Grid className={classes.query} item xs={12}>
            <Card
              subtitle={
                !isQueryPresent
                  ? 'Choose a measure or dimension to get started'
                  : ''
              }
              title="Build yer query">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <MemberGroup
                    availableMembers={availableMeasures}
                    members={measures}
                    name="Measure"
                    updateMethods={updateMeasures}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MemberGroup
                    availableMembers={availableDimensions}
                    members={dimensions}
                    name="Dimension"
                    updateMethods={updateDimensions}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MemberGroup
                    availableMembers={availableSegments}
                    members={segments}
                    name="Segment"
                    updateMethods={updateSegments}
                  />
                </Grid>
                <TimeGroup
                  availableMembers={availableTimeDimensions}
                  members={timeDimensions}
                  name="Time"
                  updateMethods={updateTimeDimensions}
                />
                {isQueryPresent && (
                  <FilterGroup
                    availableMembers={uniq([
                      ...availableDimensions,
                      ...availableMeasures,
                    ])}
                    members={filters}
                    name="Filter"
                    updateMethods={updateFilters}
                  />
                )}
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            {isQueryPresent && (
              <ChartRenderer
                vizState={{ query: validatedQuery, chartType }}
                updateChartType={updateChartType}
              />
            )}
          </Grid>
        </Grid>
      )}
    />
  );
};

export default ExploreQueryBuilder;
