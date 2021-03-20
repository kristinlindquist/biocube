import { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { get } from 'lodash';
import { useQuery } from '@apollo/client';

import { Page } from 'components/Page';
import { Component } from 'components/Dynamic';
import { GetTemplateDocument } from 'gql';

const getPages = (pages) =>
  pages.map(({ components, id, title, url }) => (
    <Route exact key={id} path={url}>
      <Page title={title}>
        {(components || []).map(
          ({ id: cId, delete: del, props, read, upsert, type }) => (
            <Component
              key={`${title}-${cId}`}
              delete={del}
              props={props}
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
