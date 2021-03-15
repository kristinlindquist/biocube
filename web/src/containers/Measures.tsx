import { ReactElement } from 'react';
import { get, isEmpty } from 'lodash';

import { Page } from 'components/Page';
import { DataGrid } from 'components/Table';
import {
  upsertMeasureMutation,
  useGetMeasuresQuery,
  useGetIndicationsQuery,
} from 'gql';

const Measures = (): ReactElement => {
  const { data, error, loading } = useGetMeasuresQuery({
    variables: { input: {} },
  });

  const { data: iData } = useGetIndicationsQuery({ variables: { input: {} } });

  const [upsertMeasureMutation] = useUpsertMeasureMutation();

  return (
    <Page error={error} loading={loading} title="Measurements">
      <DataGrid
        allowAdds
        createMutation={upsertMeasureMutation}
        columns={[
          {
            id: 'indications.name',
            name: 'Indication',
            options: get(iData, 'getIndications.indications'),
            type: 'multiple',
          },
          { id: 'name', name: 'Name', type: 'string' },
          { id: 'description', name: 'Description', type: 'text' },
        ]}
        rows={(get(data, 'getMeasures.measures') || []).map((d) => ({
          ...d,
          'indications.name': !isEmpty(d.indications)
            ? d.indications[0].name
            : null,
        }))}
      />
    </Page>
  );
};

export default Measures;
