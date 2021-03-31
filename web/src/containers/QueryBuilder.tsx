import { useState } from 'react';
import { ExploreQueryBuilder } from 'components/QueryBuilder';

const QueryBuilder = () => {
  const [vizState, setVizState] = useState({});
  return <ExploreQueryBuilder setVizState={setVizState} vizState={vizState} />;
};

export default QueryBuilder;
