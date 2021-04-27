import { QueryBuilderState } from '@cubejs-client/react';

// eslint-disable-next-line
type Props = QueryBuilderState & { [key: string]: any };

export default (oldState: Props, state: Props): Props => {
  const { query: oldQuery, sessionGranularity } = oldState;
  const { query: newQuery } = state;
  let newState = state;
  const defaultGranularity = sessionGranularity || 'day';

  const {
    dimensions: oldDims,
    filters: oldFilters,
    measures: oldMeasures,
    timeDimensions: oldTds,
  } = oldQuery || {};

  const {
    dimensions: newDims,
    filters: newFilters,
    measures: newMeasures,
    timeDimensions: newTds,
  } = newQuery || {};

  if (newState.query) {
    const { meta } = oldState;

    if (
      (oldTds || []).length === 1 &&
      (newTds || []).length === 1 &&
      newTds[0].granularity &&
      oldTds[0].granularity !== newTds[0].granularity
    ) {
      newState = {
        ...newState,
        sessionGranularity: newTds[0].granularity,
      };
    }

    if (
      ((oldMeasures || []).length === 0 && (newMeasures || []).length > 0) ||
      ((oldMeasures || []).length === 1 &&
        (newMeasures || []).length === 1 &&
        oldMeasures[0] !== newMeasures[0])
    ) {
      const defaultTd = meta.defaultTimeDimensionNameFor(newMeasures[0]);
      return {
        ...newState,
        query: {
          ...newQuery,
          timeDimensions: defaultTd
            ? [
                {
                  dateRange: 'last 7 days',
                  dimension: defaultTd,
                  granularity: defaultGranularity,
                },
              ]
            : [],
        },
        chartType: defaultTd ? 'line' : 'table',
      };
    }

    if ((oldDims || []).length === 0 && (newDims || []).length > 0) {
      return {
        ...newState,
        chartType: 'line',
        query: newQuery,
      };
    }

    if ((oldFilters || []).length === 0 && (newFilters || []).length > 0) {
      return {
        ...newState,
        query: {
          ...newQuery,
          filters: (newFilters || []).map(({ member }) => ({
            member,
            operator: 'contains', // f.operators ? f.operators[0] : 'equals',
            values: [''],
          })),
        },
      };
    }

    if ((oldDims || []).length > 0 && (newDims || []).length === 0) {
      return {
        ...newState,
        chartType: (newDims || []).length ? 'line' : 'table',
        query: newQuery,
      };
    }

    if (
      ((oldDims || []).length > 0 || (oldMeasures || []).length > 0) &&
      (newDims || []).length === 0 &&
      (newMeasures || []).length === 0
    ) {
      return {
        ...newState,
        query: {
          ...newQuery,
          filters: [],
          timeDimensions: [],
        },
        sessionGranularity: null,
      };
    }
    return newState;
  }

  if (newState.chartType) {
    const newChartType = newState.chartType;
    if (
      ['line', 'area'].includes(newChartType) &&
      (oldTds || []).length === 1 &&
      !oldTds[0].granularity
    ) {
      const [td] = oldTds;
      return {
        ...newState,
        query: {
          ...oldQuery,
          timeDimensions: [{ ...td, granularity: defaultGranularity }],
        },
      };
    }

    if (
      ['pie', 'table'].includes(newChartType) &&
      (oldTds || []).length === 1 &&
      oldTds[0].granularity
    ) {
      const [td] = oldTds;
      return {
        ...newState,
        query: {
          ...oldQuery,
          // timeDimensions: [{ ...td, granularity: undefined }],
          timeDimensions: [td],
        },
      };
    }
  }

  return newState;
};
