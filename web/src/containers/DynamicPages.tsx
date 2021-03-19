import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { get } from 'lodash';
import { useQuery } from '@apollo/client';

import { Page } from 'components/Page';
import { DataGrid } from 'components/Table';
import { GetTemplateDocument } from 'gql';

export const getComponent = (type, read): ReactElement => {
  const { data } = useQuery(read.document, {
    variables: { input: { ...read.parameters } },
  });

  switch (type) {
    case 'TABLE':
      return <DataGrid columns={[]} rows={data} />;
    default:
      return <span />;
  }
};

const getPages = (pages) =>
  pages.map(({ components, title, url }) => (
    <Route exact path={url}>
      <Page title={title}>
        {(components || []).map(({ read, type }) => {
          const Component = getComponent(type, read);
          return Component;
        })}
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
