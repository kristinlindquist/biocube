import { ReactElement } from 'react';
import { get } from 'lodash';

import { Page } from 'components/Page';
import { DataGrid } from 'components/Table';
import {
  useUpsertMeasureMutation,
  useGetMeasuresQuery,
  useGetIndicationsQuery,
} from 'gql';

const Measures = (): ReactElement => {
  const { data, error, loading, refetch } = useGetMeasuresQuery({
    variables: { input: {} },
  });

  const { data: iData } = useGetIndicationsQuery({ variables: { input: {} } });

  const [upsertMeasureMutation] = useUpsertMeasureMutation();

  return (
    <Page error={error} loading={loading} title="Measurements">
      <DataGrid
        allowAdds
        allowEdits
        mutation={upsertMeasureMutation}
        columns={[
          {
            id: 'indications',
            name: 'Indications',
            options: get(iData, 'getIndications.indications'),
            type: 'multiple',
          },
          { id: 'name', name: 'Name', type: 'string' },
          { id: 'description', name: 'Description', type: 'text' },
        ]}
        rows={get(data, 'getMeasures.measures')}
        onMutation={refetch}
      />
    </Page>
  );
};

export default Measures;
