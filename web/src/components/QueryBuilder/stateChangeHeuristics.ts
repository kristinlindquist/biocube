export default (oldState, state) => {
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
    filtres: newFilters,
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
                  dimension: defaultTd,
                  granularity: defaultGranularity,
                  dateRange: 'Last 30 days',
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
        query: {
          ...newQuery,
          timeDimensions: (newDims || []).map((td) => ({
            ...td,
            granularity: undefined,
          })),
        },
        chartType: 'line',
      };
    }

    if ((oldFilters || []).length === 0 && (newFilters || []).length > 0) {
      return {
        ...newState,
        query: {
          ...newQuery,
          filters: (newFilters || []).map((f) => ({
            ...f,
            operator: f.operators ? f.operators[0] : 'equals',
            values: [''],
          })),
        },
      };
    }

    if ((oldDims || []).length > 0 && (newDims || []).length === 0) {
      return {
        ...newState,
        query: {
          ...newQuery,
          timeDimensions: (newDims || []).map((td) => ({
            ...td,
            granularity: td.granularity || defaultGranularity,
          })),
        },
        chartType: (newDims || []).length ? 'line' : 'table',
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
          timeDimensions: [],
          filters: [],
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
          timeDimensions: [{ ...td, granularity: undefined }],
        },
      };
    }
  }

  return newState;
};
