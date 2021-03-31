import { Box, Grid, Card, Typography } from '@material-ui/core';
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
  setVizState?: (vizState: VizState) => void;
}

const ExploreQueryBuilder = ({
  vizState,
  cubejsApi,
  setVizState,
}: // chartExtra,
QbProps) => (
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
      <Grid container key="1">
        <Grid container>
          <Box display="flex">
            <MemberGroup
              members={measures}
              availableMembers={availableMeasures}
              addMemberName="Measure"
              updateMethods={updateMeasures}
            />
            <MemberGroup
              members={dimensions}
              availableMembers={availableDimensions}
              addMemberName="Dimension"
              updateMethods={updateDimensions}
            />
            <MemberGroup
              members={segments}
              availableMembers={availableSegments}
              addMemberName="Segment"
              updateMethods={updateSegments}
            />
            <TimeGroup
              title="Time"
              members={timeDimensions}
              availableMembers={availableTimeDimensions}
              addMemberName="Time"
              updateMethods={updateTimeDimensions}
            />
          </Box>
          {isQueryPresent && [
            <Grid container>
              <Grid xs={3}>
                <FilterGroup
                  members={filters}
                  availableMembers={[
                    ...availableDimensions,
                    ...availableMeasures,
                  ]}
                  addMemberName="Filter"
                  updateMethods={updateFilters}
                />
              </Grid>
            </Grid>,
          ]}
        </Grid>
      </Grid>,
      <Grid container>
        <Grid container>
          {isQueryPresent ? (
            [
              <Grid xs={6}>
                <SelectChartType
                  chartType={chartType}
                  updateChartType={updateChartType}
                />
              </Grid>,
              <Card>
                <ChartRenderer
                  vizState={{ query: validatedQuery, chartType }}
                  cubejsApi={cubejsApi}
                />
              </Card>,
            ]
          ) : (
            <Typography variant="h5">
              Choose a measure or dimension to get started
            </Typography>
          )}
        </Grid>
      </Grid>,
    ]}
  />
);
export default ExploreQueryBuilder;
