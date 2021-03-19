import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { get } from 'lodash';
import { useMutation, useQuery } from '@apollo/client';

import { Page } from 'components/Page';
import { DataGrid } from 'components/Table';
import { JSONObject, RowType } from 'types';
import {
  GetMeasureDocument,
  GetMeasuresDocument,
  UpsertMeasureDocument,
  DeleteMeasureDocument,
  GetIndicationDocument,
  GetIndicationsDocument,
  UpsertIndicationDocument,
  DeleteIndicationDocument,
  GetTemplateDocument,
} from 'gql';
import { Logger } from 'logger';

export interface ComponentProps {
  /**
   * Delete function
   */
  delete?: {
    document: string;
  };
  /**
   * Query function
   */
  read?: {
    document: string;
    parameters: JSONObject;
  };
  /**
   * Upsert function
   */
  upsert?: {
    document: string;
  };
  /**
   * Component types
   */
  type: 'TABLE';
}

const DocumentMap = {
  GetMeasureDocument,
  GetMeasuresDocument,
  UpsertMeasureDocument,
  DeleteMeasureDocument,
  GetIndicationDocument,
  GetIndicationsDocument,
  UpsertIndicationDocument,
  DeleteIndicationDocument,
};

const findNonString = (data) =>
  Object.values(data).find((v) => typeof v !== 'string');

// TODO: fix this cheesy mess.
const unwrapData = (data): RowType[] => {
  try {
    return findNonString(findNonString(data)) as RowType[];
  } catch (e) {
    Logger.warn(e);
  }
  return [];
};

const Component = ({
  delete: del,
  read,
  upsert,
  type,
}: ComponentProps): ReactElement => {
  const { data } = useQuery(DocumentMap[read.document], {
    variables: { input: read.parameters },
  });

  const [mutate] = upsert
    ? useMutation(DocumentMap[upsert.document])
    : [undefined];

  const [deleteMutation] = del
    ? useMutation(DocumentMap[del.document])
    : [undefined];

  if (!data) {
    return null;
  }

  switch (type) {
    case 'TABLE':
      return (
        <DataGrid
          deleteMutation={deleteMutation}
          mutation={mutate}
          rows={unwrapData(data)}
        />
      );
    default:
      return <span />;
  }
};

const getPages = (pages) =>
  pages.map(({ components, id, title, url }) => (
    <Route exact key={id} path={url}>
      <Page title={title}>
        {(components || []).map(
          ({ id: cId, delete: del, read, upsert, type }) => (
            <Component
              key={`${title}-${cId}`}
              delete={del}
              read={read}
              type={type}
              upsert={upsert}
            />
          ),
        )}
      </Page>
    </Route>
  ));

const DynamicPages = (): ReactElement => {
  const { data } = useQuery(GetTemplateDocument, {
    variables: { input: { id: 1 } },
  });

  const template = get(data, 'getTemplate.template');

  return template ? <Switch>{getPages(template.pages)}</Switch> : <span />;
};

export default DynamicPages;
