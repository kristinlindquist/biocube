import { ReactElement } from 'react';
import { get } from 'lodash';
import { gql, useMutation, useQuery } from '@apollo/client';

import { Page } from 'components/Page';
import { DataGrid } from 'components/Table';
import {
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

  // todo: this is painfully verbose
  const [mutate] = useMutation(UpsertMeasureDocument, {
    update(cache, { data: { upsertMeasure } }) {
      cache.modify({
        fields: {
          measures(existing = []) {
            const upsertedMeasure = cache.writeFragment({
              data: upsertMeasure,
              fragment: gql`
                fragment UpsertedMeasure on Measure {
                  id
                  description
                  name
                  indications
                }
              `,
            });
            return [...existing, upsertedMeasure];
          },
        },
      });
    },
  });

  return (
    <Page error={error} loading={loading} title="Measurements">
      <DataGrid
        allowAdds
        allowEdits
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
