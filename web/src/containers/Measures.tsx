import { ReactElement } from 'react';
import { get } from 'lodash';

import { Page } from 'components/Page';
import { DataGrid } from 'components/Table';
import { useGetMeasuresQuery } from 'gql';

const Measures = (): ReactElement => {
  const { data, error, loading } = useGetMeasuresQuery({
    variables: { input: null },
  });

  return (
    <Page error={error} loading={loading} title="Measurements">
      <DataGrid
        columns={[
          { id: 'name', name: 'Name' },
          { id: 'conceptOfInterest', name: 'Concept of Interest' },
        ]}
        rows={get(data, 'getMeasures.measures')}
      />
    </Page>
  );
};

export default Measures;
