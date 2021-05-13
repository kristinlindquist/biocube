import { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import {
  QueryBuilder as CubeJsQueryBuilder,
  VizState,
} from '@cubejs-client/react';
import { CubejsApi, Query } from '@cubejs-client/core';
import { uniq } from 'lodash';

import { IconButton } from 'components/Button';
import { Card } from 'components/Card';
import { ChartRenderer } from 'components/Chart';
import MemberGroup from './MemberGroup';
import FilterGroup from './FilterGroup';
import TimeGroup from './TimeGroup';
import stateChangeHeuristics from './stateChangeHeuristics';

export interface QbProps {
  close?: () => void;
  /**
   * cube API
   */
  cubejsApi?: CubejsApi;
  /**
   * Chart description
   */
  description?: string;
  /**
   * Chart Id, if saved
   */
  id?: number;
  /**
   * Chart Name
   */
  name?: string;
  /**
   * Open query builder
   */
  open?: () => void;
  /**
   * Saved query
   */
  query?: Query;
  /**
   * viz state, whatever that is
   */
  vizState: VizState;
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

const QueryBuilder = ({
  close,
  cubejsApi,
  name,
  query,
  setVizState,
  vizState,
  ...chartProps
}: QbProps): ReactElement => {
  const classes = useStyles();

  return (
    <CubeJsQueryBuilder
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
      }) => {
        const memberGroups = [
          {
            availableMembers: availableMeasures,
            members: measures,
            name: 'Measure',
            selection: (query || {}).measures,
            updateMethods: updateMeasures,
          },
          {
            availableMembers: availableDimensions,
            members: dimensions,
            name: 'Dimension',
            selection: (query || {}).dimensions,
            updateMethods: updateDimensions,
          },
          {
            availableMembers: availableSegments,
            members: segments,
            name: 'Segment',
            selection: (query || {}).segments,
            updateMethods: updateSegments,
          },
        ];

        return (
          <Grid container spacing={2}>
            <Grid className={classes.query} item xs={12}>
              <Card
                headerAction={
                  close && (
                    <IconButton icon={<CloseIcon />} onClick={() => close()} />
                  )
                }
                subtitle={
                  !isQueryPresent
                    ? 'Choose a measure or dimension to get started'
                    : ''
                }
                title={name ? `Edit ${name} Query` : 'Build a Query'}>
                <Grid container spacing={2}>
                  {memberGroups.map((mg) => (
                    <Grid item key={mg.name} sm={4} xs={12}>
                      <MemberGroup {...mg} query={query} />
                    </Grid>
                  ))}
                  <TimeGroup
                    availableMembers={availableTimeDimensions}
                    members={timeDimensions}
                    name="Time"
                    query={query}
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
                      query={query}
                      updateMethods={updateFilters}
                    />
                  )}
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              {isQueryPresent && (
                <ChartRenderer
                  {...chartProps}
                  name={name}
                  updateChartType={updateChartType}
                  vizState={{ chartType, query: validatedQuery }}
                />
              )}
            </Grid>
          </Grid>
        );
      }}
    />
  );
};

export default QueryBuilder;
