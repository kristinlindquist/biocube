import { ReactElement } from 'react';
import { get } from 'lodash';

import { Page } from 'components/Page';
import { DataGrid } from 'components/Table';
import { useGetMeasuresQuery } from 'gql';

const Measures = (): ReactElement => {
  const { data, error, loading } = useGetMeasuresQuery({
    variables: { input: { test: true } },
  });

  return (
    <Page error={error} loading={loading} title="Measurements">
      <DataGrid
        columns={[
          { id: 'indication', name: 'Indication' },
          { id: 'name', name: 'Name', type: 'string' },
          { id: 'description', name: 'Description', type: 'text' },
        ]}
        rows={(get(data, 'getMeasures.measures') || []).map((d) => ({
          ...d,
          indication: (d.indications || [{}])[0].name,
        }))}
      />
    </Page>
  );
};

export default Measures;
