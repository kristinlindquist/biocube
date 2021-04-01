import { ReactElement, useState } from 'react';

import { Page } from 'components/Page';
import { ExploreQueryBuilder } from 'components/QueryBuilder';

const QueryBuilder = (): ReactElement => {
  const [vizState, setVizState] = useState({});
  return (
    <Page title="Query Builder">
      <ExploreQueryBuilder setVizState={setVizState} vizState={vizState} />
    </Page>
  );
};

export default QueryBuilder;
