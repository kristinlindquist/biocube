import { ReactElement } from 'react';
import { get } from 'lodash';
import { useMutation, useQuery } from '@apollo/client';

import { Page } from 'components/Page';
import { DataGrid } from 'components/Table';
import {
  DeleteMeasureDocument,
  GetIndicationsDocument,
  GetMeasuresDocument,
  UpsertMeasureDocument,
} from 'gql';

const Measures = (): ReactElement => {
  const { data, error, loading } = useQuery(GetMeasuresDocument, {
    variables: { input: {} },
  });

  const { data: iData } = useQuery(GetIndicationsDocument, {
    variables: { input: {} },
  });

  const [mutate] = useMutation(UpsertMeasureDocument, {
    update(cache, { data: { upsertMeasure } }) {
      cache.modify({
        fields: {
          getMeasures(existing = { measures: [] }) {
            return { measures: [...existing.measures, upsertMeasure] };
          },
        },
      });
    },
  });

  const [deleteMutation] = useMutation(DeleteMeasureDocument, {
    update(cache, { data: { deleteMeasure } }) {
      cache.evict({
        id: `Measure:${deleteMeasure.measure.id}`,
      });
    },
  });

  return (
    <Page error={error} loading={loading} title="Measurements">
      <DataGrid
        allowAdds
        deleteMutation={deleteMutation}
        mutation={mutate}
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
      />
    </Page>
  );
};

export default Measures;
