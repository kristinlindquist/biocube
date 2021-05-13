import { ReactElement, useState } from 'react';

import { Page } from 'components/Page';
import { QueryBuilder as Qb } from 'components/QueryBuilder';

const QueryBuilder = (): ReactElement => {
  const [vizState, setVizState] = useState({});
  return (
    <Page title="Query Builder">
      <Qb setVizState={setVizState} vizState={vizState} />
    </Page>
  );
};

export default QueryBuilder;
