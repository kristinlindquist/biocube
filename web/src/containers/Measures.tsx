import { ReactElement } from 'react';
import { get } from 'lodash';

import { Page } from 'components/Page';
import { DataGrid } from 'components/Table';
import {
  useCreateMeasureMutation,
  useGetMeasuresQuery,
  useGetIndicationsQuery,
} from 'gql';

const Measures = (): ReactElement => {
  const { data, error, loading } = useGetMeasuresQuery({
    variables: { input: { test: true } },
  });

  const { data: iData } = useGetIndicationsQuery({ variables: { input: {} } });

  const [createMeasureMutation] = useCreateMeasureMutation();

  return (
    <Page error={error} loading={loading} title="Measurements">
      <DataGrid
        allowAdds
        createMutation={createMeasureMutation}
        columns={[
          {
            id: 'indication.name',
            name: 'Indication',
            options: get(iData, 'getIndications.indications'),
          },
          { id: 'name', name: 'Name', type: 'string' },
          { id: 'description', name: 'Description', type: 'text' },
        ]}
        rows={(get(data, 'getMeasures.measures') || []).map((d) => ({
          ...d,
          'indication.name': (d.indications || [{}])[0].name,
        }))}
      />
    </Page>
  );
};

export default Measures;
