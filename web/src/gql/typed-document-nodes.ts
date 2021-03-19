import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
  JSON: any;
};

export type Query = {
  __typename?: 'Query';
  document: QueryDocumentType;
  getActivity: GetActivityResult;
  getDaily: GetDailyResult;
  getDevice: GetDeviceResult;
  getHeartRate: GetHeartRateResult;
  getIndication: GetIndicationResult;
  getIndications: GetIndicationsResult;
  getMeasure: GetMeasureResult;
  getMeasures: GetMeasuresResult;
  getSleep: GetSleepResult;
  getTemplate: GetTemplateResult;
  getTemplates: GetTemplatesResult;
  getUser: GetUserResult;
  id: Scalars['Int'];
  parameters: Scalars['JSON'];
};


export type QueryGetActivityArgs = {
  input: GetActivityInput;
};


export type QueryGetDailyArgs = {
  input: GetDailyInput;
};


export type QueryGetDeviceArgs = {
  input: GetDeviceInput;
};


export type QueryGetHeartRateArgs = {
  input: GetHeartRateInput;
};


export type QueryGetIndicationArgs = {
  input: GetIndicationInput;
};


export type QueryGetIndicationsArgs = {
  input: GetIndicationsInput;
};


export type QueryGetMeasureArgs = {
  input: GetMeasureInput;
};


export type QueryGetMeasuresArgs = {
  input: GetMeasuresInput;
};


export type QueryGetSleepArgs = {
  input: GetSleepInput;
};


export type QueryGetTemplateArgs = {
  input: GetTemplateInput;
};


export type QueryGetTemplatesArgs = {
  input: GetTemplatesInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};

export type GetDeviceInput = {
  id: Scalars['Int'];
};

export type GetDeviceResult = {
  __typename?: 'GetDeviceResult';
  device?: Maybe<Device>;
};

export type Device = {
  __typename?: 'Device';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  name: Scalars['String'];
};


export type GetHeartRateInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type GetHeartRateResult = {
  __typename?: 'GetHeartRateResult';
  heartRate?: Maybe<Array<Maybe<HeartRate>>>;
};

export type GetSleepInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type GetSleepResult = {
  __typename?: 'GetSleepResult';
  sleep?: Maybe<Array<Maybe<Sleep>>>;
};

export type GetDailyInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type GetDailyResult = {
  __typename?: 'GetDailyResult';
  daily?: Maybe<Array<Maybe<Daily>>>;
};

export type GetActivityInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type GetActivityResult = {
  __typename?: 'GetActivityResult';
  activity?: Maybe<Array<Maybe<Activity>>>;
};

export type HeartRateSummary = {
  __typename?: 'HeartRateSummary';
  average?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
};

export type Activity = {
  __typename?: 'Activity';
  start?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type Daily = {
  __typename?: 'Daily';
  date?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<HeartRateSummary>;
};

export type HeartRate = {
  __typename?: 'HeartRate';
  date?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type OxygenSaturation = {
  __typename?: 'OxygenSaturation';
  date?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type Sleep = {
  __typename?: 'Sleep';
  start?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteIndication: DeleteIndicationResult;
  deleteMeasure: DeleteMeasureResult;
  deleteTemplate: DeleteTemplateResult;
  document: QueryDocumentType;
  id: Scalars['Int'];
  parameters: Scalars['JSON'];
  upsertIndication: UpsertIndicationResult;
  upsertMeasure: UpsertMeasureResult;
  upsertTemplate: UpsertTemplateResult;
};


export type MutationDeleteIndicationArgs = {
  input: DeleteIndicationInput;
};


export type MutationDeleteMeasureArgs = {
  input: DeleteMeasureInput;
};


export type MutationDeleteTemplateArgs = {
  input: DeleteTemplateInput;
};


export type MutationUpsertIndicationArgs = {
  input: UpsertIndicationInput;
};


export type MutationUpsertMeasureArgs = {
  input: UpsertMeasureInput;
};


export type MutationUpsertTemplateArgs = {
  input: UpsertTemplateInput;
};

export type UpsertIndicationInput = {
  id?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type UpsertIndicationResult = {
  __typename?: 'UpsertIndicationResult';
  indication?: Maybe<Indication>;
};

export type DeleteIndicationInput = {
  id: Scalars['Int'];
};

export type DeleteIndicationResult = {
  __typename?: 'DeleteIndicationResult';
  indication?: Maybe<Indication>;
};

export type GetIndicationsInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetIndicationsResult = {
  __typename?: 'GetIndicationsResult';
  indications?: Maybe<Array<Maybe<Indication>>>;
};

export type GetIndicationInput = {
  id: Scalars['Int'];
};

export type GetIndicationResult = {
  __typename?: 'GetIndicationResult';
  indication?: Maybe<Indication>;
};

export type Indication = {
  __typename?: 'Indication';
  conceptsOfInterest?: Maybe<Array<ConceptOfInterest>>;
  description: Scalars['String'];
  id: Scalars['Int'];
  indications?: Maybe<Array<Indication>>;
  name: Scalars['String'];
};

export type ConceptOfInterest = {
  __typename?: 'ConceptOfInterest';
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UpsertMeasureInput = {
  id?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  name: Scalars['String'];
  indications: Array<IndicationInput>;
};

export type IndicationInput = {
  id: Scalars['Int'];
  description: Scalars['String'];
  name: Scalars['String'];
};

export type UpsertMeasureResult = {
  __typename?: 'UpsertMeasureResult';
  measure?: Maybe<Measure>;
};

export type DeleteMeasureInput = {
  id: Scalars['Int'];
};

export type DeleteMeasureResult = {
  __typename?: 'DeleteMeasureResult';
  measure?: Maybe<Measure>;
};

export type GetMeasuresInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetMeasuresResult = {
  __typename?: 'GetMeasuresResult';
  measures?: Maybe<Array<Maybe<Measure>>>;
};

export type GetMeasureInput = {
  id: Scalars['Int'];
};

export type GetMeasureResult = {
  __typename?: 'GetMeasureResult';
  measure?: Maybe<Measure>;
};

export type Measure = {
  __typename?: 'Measure';
  id?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  name: Scalars['String'];
  conceptsOfInterest?: Maybe<Array<ConceptOfInterest>>;
  indications?: Maybe<Array<Indication>>;
};

export type UpsertTemplateInput = {
  id?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  name: Scalars['String'];
};

export type UpsertTemplateResult = {
  __typename?: 'UpsertTemplateResult';
  template?: Maybe<Template>;
};

export type DeleteTemplateInput = {
  id: Scalars['Int'];
};

export type DeleteTemplateResult = {
  __typename?: 'DeleteTemplateResult';
  template?: Maybe<Template>;
};

export type GetTemplatesInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetTemplatesResult = {
  __typename?: 'GetTemplatesResult';
  templates?: Maybe<Array<Maybe<Template>>>;
};

export type GetTemplateInput = {
  id: Scalars['Int'];
};

export type GetTemplateResult = {
  __typename?: 'GetTemplateResult';
  template?: Maybe<Template>;
};


export type Template = {
  __typename?: 'Template';
  id: Scalars['Int'];
  name: Scalars['String'];
  pages?: Maybe<Array<Page>>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['Int'];
  name: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  components?: Maybe<Array<Component>>;
};

export type Component = {
  __typename?: 'Component';
  id: Scalars['Int'];
  props?: Maybe<Scalars['JSON']>;
  type: ComponentType;
  read?: Maybe<Query>;
  upsert?: Maybe<Mutation>;
  delete?: Maybe<Mutation>;
};

export enum ComponentType {
  Table = 'TABLE'
}

export enum QueryDocumentType {
  GetMeasureDocument = 'GetMeasureDocument',
  GetMeasuresDocument = 'GetMeasuresDocument',
  UpsertMeasureDocument = 'UpsertMeasureDocument',
  DeleteMeasureDocument = 'DeleteMeasureDocument',
  GetIndicationDocument = 'GetIndicationDocument',
  GetIndicationsDocument = 'GetIndicationsDocument',
  UpsertIndicationDocument = 'UpsertIndicationDocument',
  DeleteIndicationDocument = 'DeleteIndicationDocument'
}

export type GetUserInput = {
  id: Scalars['Int'];
};

export type GetUserResult = {
  __typename?: 'GetUserResult';
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
  devices?: Maybe<Array<Maybe<Device>>>;
};

export type DeleteIndicationMutationVariables = Exact<{
  input: DeleteIndicationInput;
}>;


export type DeleteIndicationMutation = (
  { __typename?: 'Mutation' }
  & { deleteIndication: (
    { __typename?: 'DeleteIndicationResult' }
    & { indication?: Maybe<(
      { __typename?: 'Indication' }
      & Pick<Indication, 'id' | 'description' | 'name'>
    )> }
  ) }
);

export type UpsertIndicationMutationVariables = Exact<{
  input: UpsertIndicationInput;
}>;


export type UpsertIndicationMutation = (
  { __typename?: 'Mutation' }
  & { upsertIndication: (
    { __typename?: 'UpsertIndicationResult' }
    & { indication?: Maybe<(
      { __typename?: 'Indication' }
      & Pick<Indication, 'id' | 'description' | 'name'>
    )> }
  ) }
);

export type DeleteMeasureMutationVariables = Exact<{
  input: DeleteMeasureInput;
}>;


export type DeleteMeasureMutation = (
  { __typename?: 'Mutation' }
  & { deleteMeasure: (
    { __typename?: 'DeleteMeasureResult' }
    & { measure?: Maybe<(
      { __typename?: 'Measure' }
      & Pick<Measure, 'id' | 'description' | 'name'>
      & { indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name'>
      )>> }
    )> }
  ) }
);

export type UpsertMeasureMutationVariables = Exact<{
  input: UpsertMeasureInput;
}>;


export type UpsertMeasureMutation = (
  { __typename?: 'Mutation' }
  & { upsertMeasure: (
    { __typename?: 'UpsertMeasureResult' }
    & { measure?: Maybe<(
      { __typename?: 'Measure' }
      & Pick<Measure, 'id' | 'description' | 'name'>
      & { indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name'>
      )>> }
    )> }
  ) }
);

export type DeleteTemplateMutationVariables = Exact<{
  input: DeleteTemplateInput;
}>;


export type DeleteTemplateMutation = (
  { __typename?: 'Mutation' }
  & { deleteTemplate: (
    { __typename?: 'DeleteTemplateResult' }
    & { template?: Maybe<(
      { __typename?: 'Template' }
      & Pick<Template, 'id' | 'name'>
    )> }
  ) }
);

export type UpsertTemplateMutationVariables = Exact<{
  input: UpsertTemplateInput;
}>;


export type UpsertTemplateMutation = (
  { __typename?: 'Mutation' }
  & { upsertTemplate: (
    { __typename?: 'UpsertTemplateResult' }
    & { template?: Maybe<(
      { __typename?: 'Template' }
      & Pick<Template, 'id' | 'name'>
      & { pages?: Maybe<Array<(
        { __typename?: 'Page' }
        & Pick<Page, 'id' | 'name' | 'title' | 'url'>
      )>> }
    )> }
  ) }
);

export type GetDeviceQueryVariables = Exact<{
  input: GetDeviceInput;
}>;


export type GetDeviceQuery = (
  { __typename?: 'Query' }
  & { getDevice: (
    { __typename?: 'GetDeviceResult' }
    & { device?: Maybe<(
      { __typename?: 'Device' }
      & Pick<Device, 'id' | 'userId' | 'name'>
    )> }
  ) }
);

export type GetActivityQueryVariables = Exact<{
  input: GetActivityInput;
}>;


export type GetActivityQuery = (
  { __typename?: 'Query' }
  & { getActivity: (
    { __typename?: 'GetActivityResult' }
    & { activity?: Maybe<Array<Maybe<(
      { __typename?: 'Activity' }
      & Pick<Activity, 'start' | 'end' | 'duration' | 'type'>
    )>>> }
  ) }
);

export type GetDailyQueryVariables = Exact<{
  input: GetDailyInput;
}>;


export type GetDailyQuery = (
  { __typename?: 'Query' }
  & { getDaily: (
    { __typename?: 'GetDailyResult' }
    & { daily?: Maybe<Array<Maybe<(
      { __typename?: 'Daily' }
      & Pick<Daily, 'date'>
      & { heartRate?: Maybe<(
        { __typename?: 'HeartRateSummary' }
        & Pick<HeartRateSummary, 'average' | 'min' | 'max'>
      )> }
    )>>> }
  ) }
);

export type GetHeartRateQueryVariables = Exact<{
  input: GetHeartRateInput;
}>;


export type GetHeartRateQuery = (
  { __typename?: 'Query' }
  & { getHeartRate: (
    { __typename?: 'GetHeartRateResult' }
    & { heartRate?: Maybe<Array<Maybe<(
      { __typename?: 'HeartRate' }
      & Pick<HeartRate, 'date' | 'point'>
    )>>> }
  ) }
);

export type GetSleepQueryVariables = Exact<{
  input: GetSleepInput;
}>;


export type GetSleepQuery = (
  { __typename?: 'Query' }
  & { getSleep: (
    { __typename?: 'GetSleepResult' }
    & { sleep?: Maybe<Array<Maybe<(
      { __typename?: 'Sleep' }
      & Pick<Sleep, 'start' | 'end' | 'state'>
    )>>> }
  ) }
);

export type GetIndicationQueryVariables = Exact<{
  input: GetIndicationInput;
}>;


export type GetIndicationQuery = (
  { __typename?: 'Query' }
  & { getIndication: (
    { __typename?: 'GetIndicationResult' }
    & { indication?: Maybe<(
      { __typename?: 'Indication' }
      & Pick<Indication, 'id' | 'description' | 'name'>
    )> }
  ) }
);

export type GetIndicationsQueryVariables = Exact<{
  input: GetIndicationsInput;
}>;


export type GetIndicationsQuery = (
  { __typename?: 'Query' }
  & { getIndications: (
    { __typename?: 'GetIndicationsResult' }
    & { indications?: Maybe<Array<Maybe<(
      { __typename?: 'Indication' }
      & Pick<Indication, 'id' | 'description' | 'name'>
    )>>> }
  ) }
);

export type GetMeasureQueryVariables = Exact<{
  input: GetMeasureInput;
}>;


export type GetMeasureQuery = (
  { __typename?: 'Query' }
  & { getMeasure: (
    { __typename?: 'GetMeasureResult' }
    & { measure?: Maybe<(
      { __typename?: 'Measure' }
      & Pick<Measure, 'id' | 'description' | 'name'>
      & { conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'name'>
      )>>, indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'name'>
      )>> }
    )> }
  ) }
);

export type GetMeasuresQueryVariables = Exact<{
  input: GetMeasuresInput;
}>;


export type GetMeasuresQuery = (
  { __typename?: 'Query' }
  & { getMeasures: (
    { __typename?: 'GetMeasuresResult' }
    & { measures?: Maybe<Array<Maybe<(
      { __typename?: 'Measure' }
      & Pick<Measure, 'id' | 'description' | 'name'>
      & { indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name' | 'description'>
      )>> }
    )>>> }
  ) }
);

export type GetTemplateQueryVariables = Exact<{
  input: GetTemplateInput;
}>;


export type GetTemplateQuery = (
  { __typename?: 'Query' }
  & { getTemplate: (
    { __typename?: 'GetTemplateResult' }
    & { template?: Maybe<(
      { __typename?: 'Template' }
      & Pick<Template, 'id' | 'name'>
      & { pages?: Maybe<Array<(
        { __typename?: 'Page' }
        & Pick<Page, 'id' | 'name' | 'title' | 'url'>
        & { components?: Maybe<Array<(
          { __typename?: 'Component' }
          & Pick<Component, 'id' | 'props' | 'type'>
          & { read?: Maybe<(
            { __typename?: 'Query' }
            & Pick<Query, 'id' | 'document' | 'parameters'>
          )>, upsert?: Maybe<(
            { __typename?: 'Mutation' }
            & Pick<Mutation, 'id' | 'document' | 'parameters'>
          )>, delete?: Maybe<(
            { __typename?: 'Mutation' }
            & Pick<Mutation, 'id' | 'document' | 'parameters'>
          )> }
        )>> }
      )>> }
    )> }
  ) }
);

export type GetTemplatesQueryVariables = Exact<{
  input: GetTemplatesInput;
}>;


export type GetTemplatesQuery = (
  { __typename?: 'Query' }
  & { getTemplates: (
    { __typename?: 'GetTemplatesResult' }
    & { templates?: Maybe<Array<Maybe<(
      { __typename?: 'Template' }
      & Pick<Template, 'id' | 'name'>
      & { pages?: Maybe<Array<(
        { __typename?: 'Page' }
        & Pick<Page, 'id' | 'name' | 'title' | 'url'>
        & { components?: Maybe<Array<(
          { __typename?: 'Component' }
          & Pick<Component, 'id' | 'props' | 'type'>
          & { read?: Maybe<(
            { __typename?: 'Query' }
            & Pick<Query, 'id' | 'document' | 'parameters'>
          )>, upsert?: Maybe<(
            { __typename?: 'Mutation' }
            & Pick<Mutation, 'id' | 'document' | 'parameters'>
          )>, delete?: Maybe<(
            { __typename?: 'Mutation' }
            & Pick<Mutation, 'id' | 'document' | 'parameters'>
          )> }
        )>> }
      )>> }
    )>>> }
  ) }
);

export type GetUserQueryVariables = Exact<{
  input: GetUserInput;
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser: (
    { __typename?: 'GetUserResult' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name'>
      & { devices?: Maybe<Array<Maybe<(
        { __typename?: 'Device' }
        & Pick<Device, 'id'>
      )>>> }
    )> }
  ) }
);


export const DeleteIndicationDocument: DocumentNode<DeleteIndicationMutation, DeleteIndicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const UpsertIndicationDocument: DocumentNode<UpsertIndicationMutation, UpsertIndicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const DeleteMeasureDocument: DocumentNode<DeleteMeasureMutation, DeleteMeasureMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]};
export const UpsertMeasureDocument: DocumentNode<UpsertMeasureMutation, UpsertMeasureMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]};
export const DeleteTemplateDocument: DocumentNode<DeleteTemplateMutation, DeleteTemplateMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const UpsertTemplateDocument: DocumentNode<UpsertTemplateMutation, UpsertTemplateMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]};
export const GetDeviceDocument: DocumentNode<GetDeviceQuery, GetDeviceQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDevice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDeviceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDevice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const GetActivityDocument: DocumentNode<GetActivityQuery, GetActivityQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActivity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetActivityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getActivity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]};
export const GetDailyDocument: DocumentNode<GetDailyQuery, GetDailyQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDaily"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDailyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDaily"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daily"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"heartRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"average"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}}]}}]}}]}}]};
export const GetHeartRateDocument: DocumentNode<GetHeartRateQuery, GetHeartRateQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHeartRate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetHeartRateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHeartRate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heartRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"point"}}]}}]}}]}}]};
export const GetSleepDocument: DocumentNode<GetSleepQuery, GetSleepQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSleep"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetSleepInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSleep"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sleep"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]}}]};
export const GetIndicationDocument: DocumentNode<GetIndicationQuery, GetIndicationQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const GetIndicationsDocument: DocumentNode<GetIndicationsQuery, GetIndicationsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIndications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetIndicationsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIndications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const GetMeasureDocument: DocumentNode<GetMeasureQuery, GetMeasureQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]};
export const GetMeasuresDocument: DocumentNode<GetMeasuresQuery, GetMeasuresQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeasures"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMeasuresInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMeasures"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]};
export const GetTemplateDocument: DocumentNode<GetTemplateQuery, GetTemplateQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"read"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upsert"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}}]}}]}}]}}]}}]}}]};
export const GetTemplatesDocument: DocumentNode<GetTemplatesQuery, GetTemplatesQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTemplates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTemplatesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTemplates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"read"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upsert"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}}]}}]}}]}}]}}]}}]};
export const GetUserDocument: DocumentNode<GetUserQuery, GetUserQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"devices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]};