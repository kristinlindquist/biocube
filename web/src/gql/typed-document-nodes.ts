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

export type Activity = {
  __typename?: 'Activity';
  start?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
};

export enum AggregationType {
  Avg = 'AVG',
  Count = 'COUNT',
  CountDistinct = 'COUNT_DISTINCT',
  CountDistinctApprox = 'COUNT_DISTINCT_APPROX',
  Max = 'MAX',
  Min = 'MIN',
  Number = 'NUMBER',
  RunningTotal = 'RUNNING_TOTAL',
  Value = 'VALUE',
  Sum = 'SUM'
}

export type Answer = {
  __typename?: 'Answer';
  id?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type AnswerInput = {
  id: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type AspectOfHealth = {
  __typename?: 'AspectOfHealth';
  conceptsOfInterest?: Maybe<Array<ConceptOfInterest>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  indications?: Maybe<Array<Indication>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type AspectOfHealthInput = {
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export enum ChartType {
  Area = 'AREA',
  Bar = 'BAR',
  Line = 'LINE',
  Pie = 'PIE',
  Table = 'TABLE'
}

export type Component = {
  __typename?: 'Component';
  id: Scalars['Int'];
  props?: Maybe<Scalars['JSON']>;
  type: ComponentType;
  read?: Maybe<DataQuery>;
  readOne?: Maybe<DataQuery>;
  upsert?: Maybe<DataQuery>;
  delete?: Maybe<DataQuery>;
};

export enum ComponentType {
  Content = 'CONTENT',
  Datagrid = 'DATAGRID',
  Table = 'TABLE'
}

export type ConceptOfInterest = {
  __typename?: 'ConceptOfInterest';
  aspectsOfHealth?: Maybe<Array<AspectOfHealth>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  measures?: Maybe<Array<Measure>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ConceptOfInterestInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type DashboardGraph = {
  __typename?: 'DashboardGraph';
  id: Scalars['Int'];
  name: Scalars['String'];
  layout: Scalars['JSON'];
  vizState: Scalars['JSON'];
};

export type DataQuery = {
  __typename?: 'DataQuery';
  id: Scalars['Int'];
  document: QueryDocumentType;
  parameters: Scalars['JSON'];
};


export type DeleteAspectOfHealthInput = {
  id: Scalars['Int'];
};

export type DeleteAspectOfHealthResult = {
  __typename?: 'DeleteAspectOfHealthResult';
  aspectOfHealth: AspectOfHealth;
};

export type DeleteConceptOfInterestInput = {
  id: Scalars['Int'];
};

export type DeleteConceptOfInterestResult = {
  __typename?: 'DeleteConceptOfInterestResult';
  conceptOfInterest: ConceptOfInterest;
};

export type DeleteDashboardGraphInput = {
  id: Scalars['Int'];
};

export type DeleteDashboardGraphResult = {
  __typename?: 'DeleteDashboardGraphResult';
  dashboardGraph: DashboardGraph;
};

export type DeleteIndicationInput = {
  id: Scalars['Int'];
};

export type DeleteIndicationResult = {
  __typename?: 'DeleteIndicationResult';
  indication: Indication;
};

export type DeleteMeasureInput = {
  id: Scalars['Int'];
};

export type DeleteMeasureResult = {
  __typename?: 'DeleteMeasureResult';
  measure?: Maybe<Measure>;
};

export type DeleteTemplateInput = {
  id: Scalars['Int'];
};

export type DeleteTemplateResult = {
  __typename?: 'DeleteTemplateResult';
  template?: Maybe<Template>;
};

export type Device = {
  __typename?: 'Device';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['Int'];
  dimension: Scalars['String'];
  join?: Maybe<Scalars['String']>;
  operator: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

export type FilterInput = {
  id?: Maybe<Scalars['Int']>;
  dimension: Scalars['String'];
  join?: Maybe<Scalars['String']>;
  operator: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

export type GetAspectOfHealthInput = {
  id: Scalars['Int'];
};

export type GetAspectOfHealthResult = {
  __typename?: 'GetAspectOfHealthResult';
  aspectOfHealth?: Maybe<AspectOfHealth>;
};

export type GetAspectsOfHealthInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetAspectsOfHealthResult = {
  __typename?: 'GetAspectsOfHealthResult';
  aspectsOfHealth?: Maybe<Array<Maybe<AspectOfHealth>>>;
};

export type GetConceptOfInterestInput = {
  id: Scalars['Int'];
};

export type GetConceptOfInterestResult = {
  __typename?: 'GetConceptOfInterestResult';
  conceptOfInterest?: Maybe<ConceptOfInterest>;
};

export type GetConceptsOfInterestInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetConceptsOfInterestResult = {
  __typename?: 'GetConceptsOfInterestResult';
  conceptsOfInterest?: Maybe<Array<Maybe<ConceptOfInterest>>>;
};

export type GetDashboardGraphInput = {
  id: Scalars['Int'];
};

export type GetDashboardGraphResult = {
  __typename?: 'GetDashboardGraphResult';
  dashboardGraph?: Maybe<DashboardGraph>;
};

export type GetDashboardGraphsInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetDashboardGraphsResult = {
  __typename?: 'GetDashboardGraphsResult';
  dashboardGraphs?: Maybe<Array<Maybe<DashboardGraph>>>;
};

export type GetDeviceInput = {
  id: Scalars['Int'];
};

export type GetDeviceResult = {
  __typename?: 'GetDeviceResult';
  device?: Maybe<Device>;
};

export type GetIndicationInput = {
  id: Scalars['Int'];
};

export type GetIndicationResult = {
  __typename?: 'GetIndicationResult';
  indication?: Maybe<Indication>;
};

export type GetIndicationsInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetIndicationsResult = {
  __typename?: 'GetIndicationsResult';
  indications?: Maybe<Array<Maybe<Indication>>>;
};

export type GetMeasureInput = {
  id: Scalars['Int'];
};

export type GetMeasureResult = {
  __typename?: 'GetMeasureResult';
  measure?: Maybe<Measure>;
};

export type GetMeasuresInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetMeasuresResult = {
  __typename?: 'GetMeasuresResult';
  measures?: Maybe<Array<Maybe<Measure>>>;
};

export type GetTemplateInput = {
  id: Scalars['Int'];
};

export type GetTemplateResult = {
  __typename?: 'GetTemplateResult';
  template?: Maybe<Template>;
};

export type GetTemplatesInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetTemplatesResult = {
  __typename?: 'GetTemplatesResult';
  templates?: Maybe<Array<Maybe<Template>>>;
};

export type GetUserInput = {
  id: Scalars['Int'];
};

export type GetUserResult = {
  __typename?: 'GetUserResult';
  user?: Maybe<User>;
};

export type HeartRate = {
  __typename?: 'HeartRate';
  date?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type Indication = {
  __typename?: 'Indication';
  conceptsOfInterest?: Maybe<Array<ConceptOfInterest>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  measures?: Maybe<Array<Measure>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type IndicationInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};


export type Measure = {
  __typename?: 'Measure';
  abbreviation?: Maybe<Scalars['String']>;
  components?: Maybe<Array<Measure>>;
  conceptsOfInterest?: Maybe<Array<ConceptOfInterest>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  indications?: Maybe<Array<Indication>>;
  name: Scalars['String'];
  questions?: Maybe<Array<Question>>;
  recipe?: Maybe<MeasureRecipe>;
  reports?: Maybe<Array<ReportRecipe>>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MeasureInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type MeasureRecipe = {
  __typename?: 'MeasureRecipe';
  id?: Maybe<Scalars['Int']>;
  aggregation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<Filter>>;
  sql: Scalars['String'];
};

export type MeasureRecipeInput = {
  id?: Maybe<Scalars['Int']>;
  aggregation?: Maybe<AggregationType>;
  description?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<FilterInput>>;
  sql: Scalars['String'];
};

export enum MeasureStatus {
  Validated = 'VALIDATED',
  Exploratory = 'EXPLORATORY',
  Draft = 'DRAFT'
}

export type Mutation = {
  __typename?: 'Mutation';
  deleteAspectOfHealth: DeleteAspectOfHealthResult;
  deleteConceptOfInterest: DeleteConceptOfInterestResult;
  deleteDashboardGraph: DeleteDashboardGraphResult;
  deleteIndication: DeleteIndicationResult;
  deleteMeasure: DeleteMeasureResult;
  deleteTemplate: DeleteTemplateResult;
  upsertAspectOfHealth: UpsertAspectOfHealthResult;
  upsertConceptOfInterest: UpsertConceptOfInterestResult;
  upsertDashboardGraph: UpsertDashboardGraphResult;
  upsertIndication: UpsertIndicationResult;
  upsertMeasure: UpsertMeasureResult;
  upsertTemplate: UpsertTemplateResult;
};


export type MutationDeleteAspectOfHealthArgs = {
  input: DeleteAspectOfHealthInput;
};


export type MutationDeleteConceptOfInterestArgs = {
  input: DeleteConceptOfInterestInput;
};


export type MutationDeleteDashboardGraphArgs = {
  input: DeleteDashboardGraphInput;
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


export type MutationUpsertAspectOfHealthArgs = {
  input: UpsertAspectOfHealthInput;
};


export type MutationUpsertConceptOfInterestArgs = {
  input: UpsertConceptOfInterestInput;
};


export type MutationUpsertDashboardGraphArgs = {
  input: UpsertDashboardGraphInput;
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

export type OxygenSaturation = {
  __typename?: 'OxygenSaturation';
  date?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['Int'];
  name: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
  components?: Maybe<Array<Component>>;
};

export type Query = {
  __typename?: 'Query';
  getAspectOfHealth: GetAspectOfHealthResult;
  getAspectsOfHealth: GetAspectsOfHealthResult;
  getConceptOfInterest: GetConceptOfInterestResult;
  getConceptsOfInterest: GetConceptsOfInterestResult;
  getDashboardGraph: GetDashboardGraphResult;
  getDashboardGraphs: GetDashboardGraphsResult;
  getDevice: GetDeviceResult;
  getIndication: GetIndicationResult;
  getIndications: GetIndicationsResult;
  getMeasure: GetMeasureResult;
  getMeasures: GetMeasuresResult;
  getTemplate: GetTemplateResult;
  getTemplates: GetTemplatesResult;
  getUser: GetUserResult;
  syncGoogleFit: SyncGoogleFitResult;
};


export type QueryGetAspectOfHealthArgs = {
  input: GetAspectOfHealthInput;
};


export type QueryGetAspectsOfHealthArgs = {
  input: GetAspectsOfHealthInput;
};


export type QueryGetConceptOfInterestArgs = {
  input: GetConceptOfInterestInput;
};


export type QueryGetConceptsOfInterestArgs = {
  input: GetConceptsOfInterestInput;
};


export type QueryGetDashboardGraphArgs = {
  input: GetDashboardGraphInput;
};


export type QueryGetDashboardGraphsArgs = {
  input: GetDashboardGraphsInput;
};


export type QueryGetDeviceArgs = {
  input: GetDeviceInput;
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


export type QueryGetTemplateArgs = {
  input: GetTemplateInput;
};


export type QueryGetTemplatesArgs = {
  input: GetTemplatesInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};


export type QuerySyncGoogleFitArgs = {
  input: SyncGoogleFitInput;
};

export enum QueryDocumentType {
  GetAspectOfHealthDocument = 'GetAspectOfHealthDocument',
  GetAspectsOfHealthDocument = 'GetAspectsOfHealthDocument',
  UpsertAspectOfHealthDocument = 'UpsertAspectOfHealthDocument',
  DeleteAspectOfHealthDocument = 'DeleteAspectOfHealthDocument',
  GetConceptOfInterestDocument = 'GetConceptOfInterestDocument',
  GetConceptsOfInterestDocument = 'GetConceptsOfInterestDocument',
  UpsertConceptOfInterestDocument = 'UpsertConceptOfInterestDocument',
  DeleteConceptOfInterestDocument = 'DeleteConceptOfInterestDocument',
  GetDataTypeDocument = 'GetDataTypeDocument',
  GetDataTypesDocument = 'GetDataTypesDocument',
  GetMeasureDocument = 'GetMeasureDocument',
  GetMeasuresDocument = 'GetMeasuresDocument',
  UpsertMeasureDocument = 'UpsertMeasureDocument',
  DeleteMeasureDocument = 'DeleteMeasureDocument',
  GetIndicationDocument = 'GetIndicationDocument',
  GetIndicationsDocument = 'GetIndicationsDocument',
  UpsertIndicationDocument = 'UpsertIndicationDocument',
  DeleteIndicationDocument = 'DeleteIndicationDocument'
}

export type Question = {
  __typename?: 'Question';
  id?: Maybe<Scalars['Int']>;
  answers?: Maybe<Array<Answer>>;
  description?: Maybe<Scalars['String']>;
  text: Scalars['String'];
};

export type QuestionInput = {
  id: Scalars['Int'];
  answers?: Maybe<Array<AnswerInput>>;
  description?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ReportRecipe = {
  __typename?: 'ReportRecipe';
  id?: Maybe<Scalars['Int']>;
  chartType?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
};

export type ReportRecipeInput = {
  id: Scalars['Int'];
  chartType?: Maybe<ChartType>;
  meta?: Maybe<Scalars['JSON']>;
};

export type Sleep = {
  __typename?: 'Sleep';
  start?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
};

export type SyncGoogleFitInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  token: Scalars['String'];
};

export type SyncGoogleFitResult = {
  __typename?: 'SyncGoogleFitResult';
  result?: Maybe<Scalars['Boolean']>;
};

export type Template = {
  __typename?: 'Template';
  id: Scalars['Int'];
  name: Scalars['String'];
  pages?: Maybe<Array<Page>>;
};

export type UpsertAspectOfHealthInput = {
  id?: Maybe<Scalars['Int']>;
  conceptsOfInterest?: Maybe<Array<ConceptOfInterestInput>>;
  description?: Maybe<Scalars['String']>;
  indications?: Maybe<Array<IndicationInput>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type UpsertAspectOfHealthResult = {
  __typename?: 'UpsertAspectOfHealthResult';
  aspectOfHealth: AspectOfHealth;
};

export type UpsertConceptOfInterestInput = {
  id?: Maybe<Scalars['Int']>;
  aspectsOfHealth?: Maybe<Array<AspectOfHealthInput>>;
  description?: Maybe<Scalars['String']>;
  measures?: Maybe<Array<MeasureInput>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type UpsertConceptOfInterestResult = {
  __typename?: 'UpsertConceptOfInterestResult';
  conceptOfInterest: ConceptOfInterest;
};

export type UpsertDashboardGraphInput = {
  id?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  layout: Scalars['JSON'];
  vizState: Scalars['JSON'];
};

export type UpsertDashboardGraphResult = {
  __typename?: 'UpsertDashboardGraphResult';
  dashboardGraph: DashboardGraph;
};

export type UpsertIndicationInput = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  measures?: Maybe<Array<MeasureInput>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type UpsertIndicationResult = {
  __typename?: 'UpsertIndicationResult';
  indication: Indication;
};

export type UpsertMeasureInput = {
  id?: Maybe<Scalars['Int']>;
  abbreviation?: Maybe<Scalars['String']>;
  components?: Maybe<Array<MeasureInput>>;
  conceptsOfInterest?: Maybe<Array<ConceptOfInterestInput>>;
  description?: Maybe<Scalars['String']>;
  indications?: Maybe<Array<IndicationInput>>;
  name: Scalars['String'];
  recipe?: Maybe<MeasureRecipeInput>;
  reports?: Maybe<Array<ReportRecipeInput>>;
  questions?: Maybe<Array<QuestionInput>>;
  status?: Maybe<MeasureStatus>;
  url?: Maybe<Scalars['String']>;
};

export type UpsertMeasureResult = {
  __typename?: 'UpsertMeasureResult';
  measure?: Maybe<Measure>;
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

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
  devices?: Maybe<Array<Maybe<Device>>>;
};

export type DeleteAspectOfHealthMutationVariables = Exact<{
  input: DeleteAspectOfHealthInput;
}>;


export type DeleteAspectOfHealthMutation = (
  { __typename?: 'Mutation' }
  & { deleteAspectOfHealth: (
    { __typename?: 'DeleteAspectOfHealthResult' }
    & { aspectOfHealth: (
      { __typename?: 'AspectOfHealth' }
      & Pick<AspectOfHealth, 'id'>
    ) }
  ) }
);

export type UpsertAspectOfHealthMutationVariables = Exact<{
  input: UpsertAspectOfHealthInput;
}>;


export type UpsertAspectOfHealthMutation = (
  { __typename?: 'Mutation' }
  & { upsertAspectOfHealth: (
    { __typename?: 'UpsertAspectOfHealthResult' }
    & { aspectOfHealth: (
      { __typename?: 'AspectOfHealth' }
      & Pick<AspectOfHealth, 'id' | 'description' | 'name'>
      & { conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'id' | 'description' | 'name'>
      )>>, indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'description' | 'name'>
      )>> }
    ) }
  ) }
);

export type DeleteConceptOfInterestMutationVariables = Exact<{
  input: DeleteConceptOfInterestInput;
}>;


export type DeleteConceptOfInterestMutation = (
  { __typename?: 'Mutation' }
  & { deleteConceptOfInterest: (
    { __typename?: 'DeleteConceptOfInterestResult' }
    & { conceptOfInterest: (
      { __typename?: 'ConceptOfInterest' }
      & Pick<ConceptOfInterest, 'id'>
    ) }
  ) }
);

export type UpsertConceptOfInterestMutationVariables = Exact<{
  input: UpsertConceptOfInterestInput;
}>;


export type UpsertConceptOfInterestMutation = (
  { __typename?: 'Mutation' }
  & { upsertConceptOfInterest: (
    { __typename?: 'UpsertConceptOfInterestResult' }
    & { conceptOfInterest: (
      { __typename?: 'ConceptOfInterest' }
      & Pick<ConceptOfInterest, 'id' | 'description' | 'name'>
      & { aspectsOfHealth?: Maybe<Array<(
        { __typename?: 'AspectOfHealth' }
        & Pick<AspectOfHealth, 'id' | 'description' | 'name' | 'url'>
      )>>, measures?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id' | 'description' | 'name' | 'url'>
      )>> }
    ) }
  ) }
);

export type DeleteDashboardGraphMutationVariables = Exact<{
  input: DeleteDashboardGraphInput;
}>;


export type DeleteDashboardGraphMutation = (
  { __typename?: 'Mutation' }
  & { deleteDashboardGraph: (
    { __typename?: 'DeleteDashboardGraphResult' }
    & { dashboardGraph: (
      { __typename?: 'DashboardGraph' }
      & Pick<DashboardGraph, 'id'>
    ) }
  ) }
);

export type UpsertDashboardGraphMutationVariables = Exact<{
  input: UpsertDashboardGraphInput;
}>;


export type UpsertDashboardGraphMutation = (
  { __typename?: 'Mutation' }
  & { upsertDashboardGraph: (
    { __typename?: 'UpsertDashboardGraphResult' }
    & { dashboardGraph: (
      { __typename?: 'DashboardGraph' }
      & Pick<DashboardGraph, 'id' | 'name' | 'layout' | 'vizState'>
    ) }
  ) }
);

export type DeleteIndicationMutationVariables = Exact<{
  input: DeleteIndicationInput;
}>;


export type DeleteIndicationMutation = (
  { __typename?: 'Mutation' }
  & { deleteIndication: (
    { __typename?: 'DeleteIndicationResult' }
    & { indication: (
      { __typename?: 'Indication' }
      & Pick<Indication, 'id'>
    ) }
  ) }
);

export type UpsertIndicationMutationVariables = Exact<{
  input: UpsertIndicationInput;
}>;


export type UpsertIndicationMutation = (
  { __typename?: 'Mutation' }
  & { upsertIndication: (
    { __typename?: 'UpsertIndicationResult' }
    & { indication: (
      { __typename?: 'Indication' }
      & Pick<Indication, 'id' | 'description' | 'name'>
      & { measures?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id'>
      )>> }
    ) }
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
      & Pick<Measure, 'id'>
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
      & Pick<Measure, 'id' | 'abbreviation' | 'description' | 'name' | 'status' | 'url'>
      & { components?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id' | 'description' | 'name'>
      )>>, conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'id' | 'name'>
      )>>, indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name' | 'url'>
      )>>, recipe?: Maybe<(
        { __typename?: 'MeasureRecipe' }
        & Pick<MeasureRecipe, 'id' | 'aggregation' | 'sql'>
        & { filters?: Maybe<Array<(
          { __typename?: 'Filter' }
          & Pick<Filter, 'id' | 'dimension' | 'join' | 'operator' | 'values'>
        )>> }
      )>, reports?: Maybe<Array<(
        { __typename?: 'ReportRecipe' }
        & Pick<ReportRecipe, 'id' | 'chartType' | 'meta'>
      )>>, questions?: Maybe<Array<(
        { __typename?: 'Question' }
        & Pick<Question, 'id' | 'description' | 'text'>
        & { answers?: Maybe<Array<(
          { __typename?: 'Answer' }
          & Pick<Answer, 'id' | 'text' | 'value'>
        )>> }
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

export type GetAspectOfHealthQueryVariables = Exact<{
  input: GetAspectOfHealthInput;
}>;


export type GetAspectOfHealthQuery = (
  { __typename?: 'Query' }
  & { getAspectOfHealth: (
    { __typename?: 'GetAspectOfHealthResult' }
    & { aspectOfHealth?: Maybe<(
      { __typename?: 'AspectOfHealth' }
      & Pick<AspectOfHealth, 'id' | 'description' | 'name' | 'url'>
      & { conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'id' | 'name' | 'description' | 'url'>
      )>>, indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name' | 'description' | 'url'>
      )>> }
    )> }
  ) }
);

export type GetAspectsOfHealthQueryVariables = Exact<{
  input: GetAspectsOfHealthInput;
}>;


export type GetAspectsOfHealthQuery = (
  { __typename?: 'Query' }
  & { getAspectsOfHealth: (
    { __typename?: 'GetAspectsOfHealthResult' }
    & { aspectsOfHealth?: Maybe<Array<Maybe<(
      { __typename?: 'AspectOfHealth' }
      & Pick<AspectOfHealth, 'id' | 'description' | 'name'>
      & { conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'id' | 'description' | 'name'>
      )>>, indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name' | 'description'>
      )>> }
    )>>> }
  ) }
);

export type GetConceptOfInterestQueryVariables = Exact<{
  input: GetConceptOfInterestInput;
}>;


export type GetConceptOfInterestQuery = (
  { __typename?: 'Query' }
  & { getConceptOfInterest: (
    { __typename?: 'GetConceptOfInterestResult' }
    & { conceptOfInterest?: Maybe<(
      { __typename?: 'ConceptOfInterest' }
      & Pick<ConceptOfInterest, 'id' | 'description' | 'name' | 'url'>
      & { aspectsOfHealth?: Maybe<Array<(
        { __typename?: 'AspectOfHealth' }
        & Pick<AspectOfHealth, 'id' | 'description' | 'name' | 'url'>
      )>>, measures?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id' | 'description' | 'name' | 'url'>
      )>> }
    )> }
  ) }
);

export type GetConceptsOfInterestQueryVariables = Exact<{
  input: GetConceptsOfInterestInput;
}>;


export type GetConceptsOfInterestQuery = (
  { __typename?: 'Query' }
  & { getConceptsOfInterest: (
    { __typename?: 'GetConceptsOfInterestResult' }
    & { conceptsOfInterest?: Maybe<Array<Maybe<(
      { __typename?: 'ConceptOfInterest' }
      & Pick<ConceptOfInterest, 'id' | 'description' | 'name' | 'url'>
      & { aspectsOfHealth?: Maybe<Array<(
        { __typename?: 'AspectOfHealth' }
        & Pick<AspectOfHealth, 'id' | 'description' | 'name' | 'url'>
      )>>, measures?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id' | 'description' | 'name' | 'url'>
      )>> }
    )>>> }
  ) }
);

export type GetDashboardGraphQueryVariables = Exact<{
  input: GetDashboardGraphInput;
}>;


export type GetDashboardGraphQuery = (
  { __typename?: 'Query' }
  & { getDashboardGraph: (
    { __typename?: 'GetDashboardGraphResult' }
    & { dashboardGraph?: Maybe<(
      { __typename?: 'DashboardGraph' }
      & Pick<DashboardGraph, 'id' | 'name' | 'layout' | 'vizState'>
    )> }
  ) }
);

export type GetDashboardGraphsQueryVariables = Exact<{
  input: GetDashboardGraphsInput;
}>;


export type GetDashboardGraphsQuery = (
  { __typename?: 'Query' }
  & { getDashboardGraphs: (
    { __typename?: 'GetDashboardGraphsResult' }
    & { dashboardGraphs?: Maybe<Array<Maybe<(
      { __typename?: 'DashboardGraph' }
      & Pick<DashboardGraph, 'id' | 'name' | 'layout' | 'vizState'>
    )>>> }
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
      & Pick<Device, 'id' | 'userId' | 'name' | 'url'>
    )> }
  ) }
);

export type SyncGoogleFitQueryVariables = Exact<{
  input: SyncGoogleFitInput;
}>;


export type SyncGoogleFitQuery = (
  { __typename?: 'Query' }
  & { syncGoogleFit: (
    { __typename?: 'SyncGoogleFitResult' }
    & Pick<SyncGoogleFitResult, 'result'>
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
      & Pick<Indication, 'id' | 'description' | 'name' | 'url'>
      & { measures?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id' | 'name' | 'description' | 'url'>
      )>> }
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
      & Pick<Indication, 'id' | 'description' | 'name' | 'url'>
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
      & Pick<Measure, 'id' | 'abbreviation' | 'description' | 'name' | 'status' | 'url'>
      & { components?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id' | 'description' | 'name'>
        & { recipe?: Maybe<(
          { __typename?: 'MeasureRecipe' }
          & Pick<MeasureRecipe, 'id' | 'aggregation' | 'sql'>
          & { filters?: Maybe<Array<(
            { __typename?: 'Filter' }
            & Pick<Filter, 'id' | 'dimension' | 'join' | 'operator' | 'values'>
          )>> }
        )> }
      )>>, conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'id' | 'name'>
      )>>, indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name' | 'url'>
      )>>, recipe?: Maybe<(
        { __typename?: 'MeasureRecipe' }
        & Pick<MeasureRecipe, 'id' | 'aggregation' | 'sql'>
        & { filters?: Maybe<Array<(
          { __typename?: 'Filter' }
          & Pick<Filter, 'id' | 'dimension' | 'join' | 'operator' | 'values'>
        )>> }
      )>, reports?: Maybe<Array<(
        { __typename?: 'ReportRecipe' }
        & Pick<ReportRecipe, 'id' | 'chartType' | 'meta'>
      )>>, questions?: Maybe<Array<(
        { __typename?: 'Question' }
        & Pick<Question, 'id' | 'description' | 'text'>
        & { answers?: Maybe<Array<(
          { __typename?: 'Answer' }
          & Pick<Answer, 'id' | 'text' | 'value'>
        )>> }
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
      & Pick<Measure, 'id' | 'abbreviation' | 'description' | 'name' | 'status' | 'url'>
      & { components?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id' | 'description' | 'name'>
      )>>, conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'id' | 'name'>
      )>>, indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name' | 'url'>
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
            { __typename?: 'DataQuery' }
            & Pick<DataQuery, 'id' | 'document' | 'parameters'>
          )>, readOne?: Maybe<(
            { __typename?: 'DataQuery' }
            & Pick<DataQuery, 'id' | 'document' | 'parameters'>
          )>, upsert?: Maybe<(
            { __typename?: 'DataQuery' }
            & Pick<DataQuery, 'id' | 'document' | 'parameters'>
          )>, delete?: Maybe<(
            { __typename?: 'DataQuery' }
            & Pick<DataQuery, 'id' | 'document' | 'parameters'>
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
            { __typename?: 'DataQuery' }
            & Pick<DataQuery, 'id' | 'document' | 'parameters'>
          )>, readOne?: Maybe<(
            { __typename?: 'DataQuery' }
            & Pick<DataQuery, 'id' | 'document' | 'parameters'>
          )>, upsert?: Maybe<(
            { __typename?: 'DataQuery' }
            & Pick<DataQuery, 'id' | 'document' | 'parameters'>
          )>, delete?: Maybe<(
            { __typename?: 'DataQuery' }
            & Pick<DataQuery, 'id' | 'document' | 'parameters'>
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


export const DeleteAspectOfHealthDocument: DocumentNode<DeleteAspectOfHealthMutation, DeleteAspectOfHealthMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAspectOfHealth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteAspectOfHealthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAspectOfHealth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aspectOfHealth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertAspectOfHealthDocument: DocumentNode<UpsertAspectOfHealthMutation, UpsertAspectOfHealthMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertAspectOfHealth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertAspectOfHealthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertAspectOfHealth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aspectOfHealth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const DeleteConceptOfInterestDocument: DocumentNode<DeleteConceptOfInterestMutation, DeleteConceptOfInterestMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteConceptOfInterest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteConceptOfInterestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteConceptOfInterest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertConceptOfInterestDocument: DocumentNode<UpsertConceptOfInterestMutation, UpsertConceptOfInterestMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertConceptOfInterest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertConceptOfInterestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertConceptOfInterest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aspectsOfHealth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const DeleteDashboardGraphDocument: DocumentNode<DeleteDashboardGraphMutation, DeleteDashboardGraphMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDashboardGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteDashboardGraphInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDashboardGraph"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dashboardGraph"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertDashboardGraphDocument: DocumentNode<UpsertDashboardGraphMutation, UpsertDashboardGraphMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertDashboardGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertDashboardGraphInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertDashboardGraph"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dashboardGraph"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"vizState"}}]}}]}}]}}]};
export const DeleteIndicationDocument: DocumentNode<DeleteIndicationMutation, DeleteIndicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertIndicationDocument: DocumentNode<UpsertIndicationMutation, UpsertIndicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const DeleteMeasureDocument: DocumentNode<DeleteMeasureMutation, DeleteMeasureMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertMeasureDocument: DocumentNode<UpsertMeasureMutation, UpsertMeasureMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aggregation"}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"}},{"kind":"Field","name":{"kind":"Name","value":"join"}},{"kind":"Field","name":{"kind":"Name","value":"operator"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sql"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reports"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chartType"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const DeleteTemplateDocument: DocumentNode<DeleteTemplateMutation, DeleteTemplateMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const UpsertTemplateDocument: DocumentNode<UpsertTemplateMutation, UpsertTemplateMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]};
export const GetAspectOfHealthDocument: DocumentNode<GetAspectOfHealthQuery, GetAspectOfHealthQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAspectOfHealth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAspectOfHealthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAspectOfHealth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aspectOfHealth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetAspectsOfHealthDocument: DocumentNode<GetAspectsOfHealthQuery, GetAspectsOfHealthQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAspectsOfHealth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAspectsOfHealthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAspectsOfHealth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aspectsOfHealth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const GetConceptOfInterestDocument: DocumentNode<GetConceptOfInterestQuery, GetConceptOfInterestQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getConceptOfInterest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetConceptOfInterestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getConceptOfInterest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aspectsOfHealth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetConceptsOfInterestDocument: DocumentNode<GetConceptsOfInterestQuery, GetConceptsOfInterestQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getConceptsOfInterest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetConceptsOfInterestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getConceptsOfInterest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aspectsOfHealth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetDashboardGraphDocument: DocumentNode<GetDashboardGraphQuery, GetDashboardGraphQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDashboardGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDashboardGraphInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDashboardGraph"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dashboardGraph"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"vizState"}}]}}]}}]}}]};
export const GetDashboardGraphsDocument: DocumentNode<GetDashboardGraphsQuery, GetDashboardGraphsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDashboardGraphs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDashboardGraphsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDashboardGraphs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dashboardGraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"vizState"}}]}}]}}]}}]};
export const GetDeviceDocument: DocumentNode<GetDeviceQuery, GetDeviceQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDevice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDeviceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDevice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const SyncGoogleFitDocument: DocumentNode<SyncGoogleFitQuery, SyncGoogleFitQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"syncGoogleFit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SyncGoogleFitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncGoogleFit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}}]}}]}}]};
export const GetIndicationDocument: DocumentNode<GetIndicationQuery, GetIndicationQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetIndicationsDocument: DocumentNode<GetIndicationsQuery, GetIndicationsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIndications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetIndicationsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIndications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetMeasureDocument: DocumentNode<GetMeasureQuery, GetMeasureQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aggregation"}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"}},{"kind":"Field","name":{"kind":"Name","value":"join"}},{"kind":"Field","name":{"kind":"Name","value":"operator"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sql"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"recipe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aggregation"}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"}},{"kind":"Field","name":{"kind":"Name","value":"join"}},{"kind":"Field","name":{"kind":"Name","value":"operator"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sql"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reports"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chartType"}},{"kind":"Field","name":{"kind":"Name","value":"meta"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetMeasuresDocument: DocumentNode<GetMeasuresQuery, GetMeasuresQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeasures"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMeasuresInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMeasures"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetTemplateDocument: DocumentNode<GetTemplateQuery, GetTemplateQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"read"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"readOne"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upsert"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}}]}}]}}]}}]}}]}}]};
export const GetTemplatesDocument: DocumentNode<GetTemplatesQuery, GetTemplatesQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTemplates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTemplatesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTemplates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"read"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"readOne"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upsert"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}}]}}]}}]}}]}}]}}]};
export const GetUserDocument: DocumentNode<GetUserQuery, GetUserQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"devices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]};