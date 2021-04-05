export default (oldState, state) => {
  const { query, sessionGranularity } = oldState;
  let newState = state;
  const defaultGranularity = sessionGranularity || 'day';
  if (newState.query) {
    const oldQuery = query;
    const newQuery = newState.query;
    const { meta } = oldState;

    if (
      (oldQuery.timeDimensions || []).length === 1 &&
      (newQuery.timeDimensions || []).length === 1 &&
      newQuery.timeDimensions[0].granularity &&
      oldQuery.timeDimensions[0].granularity !==
        newQuery.timeDimensions[0].granularity
    ) {
      newState = {
        ...newState,
        sessionGranularity: newQuery.timeDimensions[0].granularity,
      };
    }

    if (
      ((oldQuery.measures || []).length === 0 &&
        (newQuery.measures || []).length > 0) ||
      ((oldQuery.measures || []).length === 1 &&
        (newQuery.measures || []).length === 1 &&
        oldQuery.measures[0] !== newQuery.measures[0])
    ) {
      const defaultTd = meta.defaultTimeDimensionNameFor(newQuery.measures[0]);
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

    if (
      (oldQuery.dimensions || []).length === 0 &&
      (newQuery.dimensions || []).length > 0
    ) {
      return {
        ...newState,
        query: {
          ...newQuery,
          timeDimensions: (newQuery.timeDimensions || []).map((td) => ({
            ...td,
            granularity: undefined,
          })),
        },
        chartType: 'line',
      };
    }

    if (
      (oldQuery.filters || []).length === 0 &&
      (newQuery.filters || []).length > 0
    ) {
      return {
        ...newState,
        query: {
          ...newQuery,
          filters: (newQuery.filters || []).map((f) => ({
            ...f,
            operator: f.operators ? f.operators[0] : 'equals',
            values: [''],
          })),
        },
      };
    }

    if (
      (oldQuery.dimensions || []).length > 0 &&
      (newQuery.dimensions || []).length === 0
    ) {
      return {
        ...newState,
        query: {
          ...newQuery,
          timeDimensions: (newQuery.timeDimensions || []).map((td) => ({
            ...td,
            granularity: td.granularity || defaultGranularity,
          })),
        },
        chartType: (newQuery.timeDimensions || []).length ? 'line' : 'table',
      };
    }

    if (
      ((oldQuery.dimensions || []).length > 0 ||
        (oldQuery.measures || []).length > 0) &&
      (newQuery.dimensions || []).length === 0 &&
      (newQuery.measures || []).length === 0
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
      (newChartType === 'line' || newChartType === 'area') &&
      (query.timeDimensions || []).length === 1 &&
      !query.timeDimensions[0].granularity
    ) {
      const [td] = query.timeDimensions;
      return {
        ...newState,
        query: {
          ...query,
          timeDimensions: [{ ...td, granularity: defaultGranularity }],
        },
      };
    }

    if (
      (newChartType === 'pie' ||
        newChartType === 'table' ||
        newChartType === 'number') &&
      (query.timeDimensions || []).length === 1 &&
      query.timeDimensions[0].granularity
    ) {
      const [td] = query.timeDimensions;
      return {
        ...newState,
        query: {
          ...query,
          timeDimensions: [{ ...td, granularity: undefined }],
        },
      };
    }
  }

  return newState;
};
