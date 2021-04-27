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

export enum ChartType {
  Area = 'AREA',
  Bar = 'BAR',
  Line = 'LINE',
  Pie = 'PIE',
  Table = 'TABLE'
}

export type Component = {
  __typename?: 'Component';
  dataType: DataType;
  delete?: Maybe<DataQuery>;
  description?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<Filter>>;
  id: Scalars['Int'];
  props?: Maybe<Scalars['JSON']>;
  read?: Maybe<DataQuery>;
  readOne?: Maybe<DataQuery>;
  type: ComponentType;
  upsert?: Maybe<DataQuery>;
};

export type ComponentInput = {
  id: Scalars['Int'];
};

export enum ComponentType {
  Content = 'CONTENT',
  Datagrid = 'DATAGRID',
  Table = 'TABLE'
}

export type ConceptOfInterest = {
  __typename?: 'ConceptOfInterest';
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type ConceptOfInterestInput = {
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Daily = {
  __typename?: 'Daily';
  date?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<HeartRateSummary>;
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

export type DataType = {
  __typename?: 'DataType';
  description?: Maybe<Scalars['String']>;
  deviceTypes?: Maybe<Array<DeviceType>>;
  id: Scalars['Int'];
  measures?: Maybe<Array<Measure>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type DataTypeInput = {
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
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

export type DeleteDataTypeInput = {
  id: Scalars['Int'];
};

export type DeleteDataTypeResult = {
  __typename?: 'DeleteDataTypeResult';
  dataType?: Maybe<DataType>;
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

export type DeviceType = {
  __typename?: 'DeviceType';
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type DeviceTypeInput = {
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Filter = {
  __typename?: 'Filter';
  id: Scalars['Int'];
  dimension: Scalars['String'];
  join?: Maybe<Scalars['String']>;
  operator: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

export type GetActivityInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  token: Scalars['String'];
};

export type GetActivityResult = {
  __typename?: 'GetActivityResult';
  activity?: Maybe<Array<Maybe<Activity>>>;
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

export type GetDailyInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  token: Scalars['String'];
};

export type GetDailyResult = {
  __typename?: 'GetDailyResult';
  daily?: Maybe<Array<Maybe<Daily>>>;
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

export type GetDataTypeInput = {
  id: Scalars['Int'];
};

export type GetDataTypeResult = {
  __typename?: 'GetDataTypeResult';
  dataType?: Maybe<DataType>;
};

export type GetDataTypesInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetDataTypesResult = {
  __typename?: 'GetDataTypesResult';
  dataTypes?: Maybe<Array<Maybe<DataType>>>;
};

export type GetDeviceInput = {
  id: Scalars['Int'];
};

export type GetDeviceResult = {
  __typename?: 'GetDeviceResult';
  device?: Maybe<Device>;
};

export type GetHeartRateInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  token: Scalars['String'];
};

export type GetHeartRateResult = {
  __typename?: 'GetHeartRateResult';
  heartRate?: Maybe<Array<Maybe<HeartRate>>>;
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

export type GetSleepInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  token: Scalars['String'];
};

export type GetSleepResult = {
  __typename?: 'GetSleepResult';
  sleep?: Maybe<Array<Maybe<Sleep>>>;
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

export type HeartRateSummary = {
  __typename?: 'HeartRateSummary';
  average?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
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
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type Measure = {
  __typename?: 'Measure';
  aggregation?: Maybe<Scalars['String']>;
  chartType?: Maybe<Scalars['String']>;
  components?: Maybe<Array<Component>>;
  conceptsOfInterest?: Maybe<Array<ConceptOfInterest>>;
  dataTypes?: Maybe<Array<DataType>>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  indications?: Maybe<Array<Indication>>;
  meta?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  sql?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type MeasureInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum MeasureStatus {
  Validated = 'VALIDATED',
  Exploratory = 'EXPLORATORY',
  Draft = 'DRAFT'
}

export type Mutation = {
  __typename?: 'Mutation';
  deleteConceptOfInterest: DeleteConceptOfInterestResult;
  deleteDashboardGraph: DeleteDashboardGraphResult;
  deleteDataType: DeleteDataTypeResult;
  deleteIndication: DeleteIndicationResult;
  deleteMeasure: DeleteMeasureResult;
  deleteTemplate: DeleteTemplateResult;
  upsertConceptOfInterest: UpsertConceptOfInterestResult;
  upsertDashboardGraph: UpsertDashboardGraphResult;
  upsertDataType: UpsertDataTypeResult;
  upsertIndication: UpsertIndicationResult;
  upsertMeasure: UpsertMeasureResult;
  upsertTemplate: UpsertTemplateResult;
};


export type MutationDeleteConceptOfInterestArgs = {
  input: DeleteConceptOfInterestInput;
};


export type MutationDeleteDashboardGraphArgs = {
  input: DeleteDashboardGraphInput;
};


export type MutationDeleteDataTypeArgs = {
  input: DeleteDataTypeInput;
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


export type MutationUpsertConceptOfInterestArgs = {
  input: UpsertConceptOfInterestInput;
};


export type MutationUpsertDashboardGraphArgs = {
  input: UpsertDashboardGraphInput;
};


export type MutationUpsertDataTypeArgs = {
  input: UpsertDataTypeInput;
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
  getActivity: GetActivityResult;
  getConceptOfInterest: GetConceptOfInterestResult;
  getConceptsOfInterest: GetConceptsOfInterestResult;
  getDaily: GetDailyResult;
  getDashboardGraph: GetDashboardGraphResult;
  getDashboardGraphs: GetDashboardGraphsResult;
  getDataType: GetDataTypeResult;
  getDataTypes: GetDataTypesResult;
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
};


export type QueryGetActivityArgs = {
  input: GetActivityInput;
};


export type QueryGetConceptOfInterestArgs = {
  input: GetConceptOfInterestInput;
};


export type QueryGetConceptsOfInterestArgs = {
  input: GetConceptsOfInterestInput;
};


export type QueryGetDailyArgs = {
  input: GetDailyInput;
};


export type QueryGetDashboardGraphArgs = {
  input: GetDashboardGraphInput;
};


export type QueryGetDashboardGraphsArgs = {
  input: GetDashboardGraphsInput;
};


export type QueryGetDataTypeArgs = {
  input: GetDataTypeInput;
};


export type QueryGetDataTypesArgs = {
  input: GetDataTypesInput;
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

export enum QueryDocumentType {
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

export type Sleep = {
  __typename?: 'Sleep';
  start?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
};

export type Template = {
  __typename?: 'Template';
  id: Scalars['Int'];
  name: Scalars['String'];
  pages?: Maybe<Array<Page>>;
};

export type UpsertConceptOfInterestInput = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
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

export type UpsertDataTypeInput = {
  id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  deviceTypes?: Maybe<Array<DeviceTypeInput>>;
  measures?: Maybe<Array<MeasureInput>>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type UpsertDataTypeResult = {
  __typename?: 'UpsertDataTypeResult';
  dataType?: Maybe<DataType>;
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
  aggregation?: Maybe<AggregationType>;
  chartType?: Maybe<ChartType>;
  description?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  conceptsOfInterest?: Maybe<Array<ConceptOfInterestInput>>;
  components?: Maybe<Array<ComponentInput>>;
  dataTypes?: Maybe<Array<DataTypeInput>>;
  indications?: Maybe<Array<IndicationInput>>;
  status?: Maybe<MeasureStatus>;
  sql?: Maybe<Scalars['String']>;
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

export type DeleteDataTypeMutationVariables = Exact<{
  input: DeleteDataTypeInput;
}>;


export type DeleteDataTypeMutation = (
  { __typename?: 'Mutation' }
  & { deleteDataType: (
    { __typename?: 'DeleteDataTypeResult' }
    & { dataType?: Maybe<(
      { __typename?: 'DataType' }
      & Pick<DataType, 'id'>
    )> }
  ) }
);

export type UpsertDataTypeMutationVariables = Exact<{
  input: UpsertDataTypeInput;
}>;


export type UpsertDataTypeMutation = (
  { __typename?: 'Mutation' }
  & { upsertDataType: (
    { __typename?: 'UpsertDataTypeResult' }
    & { dataType?: Maybe<(
      { __typename?: 'DataType' }
      & Pick<DataType, 'id' | 'description' | 'name'>
      & { deviceTypes?: Maybe<Array<(
        { __typename?: 'DeviceType' }
        & Pick<DeviceType, 'id' | 'name' | 'description'>
      )>>, measures?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id' | 'name' | 'description'>
      )>> }
    )> }
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
      & Pick<Measure, 'id' | 'aggregation' | 'description' | 'name' | 'status' | 'sql' | 'url'>
      & { conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'id' | 'name'>
      )>>, components?: Maybe<Array<(
        { __typename?: 'Component' }
        & Pick<Component, 'id'>
      )>>, dataTypes?: Maybe<Array<(
        { __typename?: 'DataType' }
        & Pick<DataType, 'id' | 'name' | 'url'>
      )>>, indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name' | 'url'>
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
      & Pick<ConceptOfInterest, 'id' | 'description' | 'name'>
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

export type GetDataTypeQueryVariables = Exact<{
  input: GetDataTypeInput;
}>;


export type GetDataTypeQuery = (
  { __typename?: 'Query' }
  & { getDataType: (
    { __typename?: 'GetDataTypeResult' }
    & { dataType?: Maybe<(
      { __typename?: 'DataType' }
      & Pick<DataType, 'id' | 'description' | 'name' | 'url'>
      & { deviceTypes?: Maybe<Array<(
        { __typename?: 'DeviceType' }
        & Pick<DeviceType, 'id' | 'description' | 'name'>
      )>>, measures?: Maybe<Array<(
        { __typename?: 'Measure' }
        & Pick<Measure, 'id' | 'description' | 'name' | 'url'>
      )>> }
    )> }
  ) }
);

export type GetDataTypesQueryVariables = Exact<{
  input: GetDataTypesInput;
}>;


export type GetDataTypesQuery = (
  { __typename?: 'Query' }
  & { getDataTypes: (
    { __typename?: 'GetDataTypesResult' }
    & { dataTypes?: Maybe<Array<Maybe<(
      { __typename?: 'DataType' }
      & Pick<DataType, 'id' | 'description' | 'name' | 'url'>
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

export type GetActivityQueryVariables = Exact<{
  input: GetActivityInput;
}>;


export type GetActivityQuery = (
  { __typename?: 'Query' }
  & { getActivity: (
    { __typename?: 'GetActivityResult' }
    & { activity?: Maybe<Array<Maybe<(
      { __typename?: 'Activity' }
      & Pick<Activity, 'start' | 'end' | 'duration' | 'state'>
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
      & Pick<Measure, 'id' | 'aggregation' | 'description' | 'name' | 'status' | 'sql' | 'url'>
      & { conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'id' | 'name'>
      )>>, components?: Maybe<Array<(
        { __typename?: 'Component' }
        & Pick<Component, 'id' | 'description'>
        & { dataType: (
          { __typename?: 'DataType' }
          & Pick<DataType, 'id' | 'name'>
        ), filters?: Maybe<Array<(
          { __typename?: 'Filter' }
          & Pick<Filter, 'dimension' | 'join' | 'operator' | 'values'>
        )>> }
      )>>, dataTypes?: Maybe<Array<(
        { __typename?: 'DataType' }
        & Pick<DataType, 'id' | 'description' | 'name' | 'url'>
      )>>, indications?: Maybe<Array<(
        { __typename?: 'Indication' }
        & Pick<Indication, 'id' | 'name' | 'url'>
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
      & Pick<Measure, 'id' | 'description' | 'name' | 'status' | 'url'>
      & { conceptsOfInterest?: Maybe<Array<(
        { __typename?: 'ConceptOfInterest' }
        & Pick<ConceptOfInterest, 'id' | 'name'>
      )>>, dataTypes?: Maybe<Array<(
        { __typename?: 'DataType' }
        & Pick<DataType, 'id' | 'name' | 'url'>
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


export const DeleteConceptOfInterestDocument: DocumentNode<DeleteConceptOfInterestMutation, DeleteConceptOfInterestMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteConceptOfInterest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteConceptOfInterestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteConceptOfInterest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertConceptOfInterestDocument: DocumentNode<UpsertConceptOfInterestMutation, UpsertConceptOfInterestMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertConceptOfInterest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertConceptOfInterestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertConceptOfInterest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const DeleteDashboardGraphDocument: DocumentNode<DeleteDashboardGraphMutation, DeleteDashboardGraphMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDashboardGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteDashboardGraphInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDashboardGraph"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dashboardGraph"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertDashboardGraphDocument: DocumentNode<UpsertDashboardGraphMutation, UpsertDashboardGraphMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertDashboardGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertDashboardGraphInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertDashboardGraph"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dashboardGraph"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"vizState"}}]}}]}}]}}]};
export const DeleteDataTypeDocument: DocumentNode<DeleteDataTypeMutation, DeleteDataTypeMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDataType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteDataTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDataType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertDataTypeDocument: DocumentNode<UpsertDataTypeMutation, UpsertDataTypeMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertDataType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertDataTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertDataType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"deviceTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const DeleteIndicationDocument: DocumentNode<DeleteIndicationMutation, DeleteIndicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertIndicationDocument: DocumentNode<UpsertIndicationMutation, UpsertIndicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const DeleteMeasureDocument: DocumentNode<DeleteMeasureMutation, DeleteMeasureMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]};
export const UpsertMeasureDocument: DocumentNode<UpsertMeasureMutation, UpsertMeasureMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aggregation"}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dataTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sql"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const DeleteTemplateDocument: DocumentNode<DeleteTemplateMutation, DeleteTemplateMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const UpsertTemplateDocument: DocumentNode<UpsertTemplateMutation, UpsertTemplateMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]};
export const GetConceptOfInterestDocument: DocumentNode<GetConceptOfInterestQuery, GetConceptOfInterestQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getConceptOfInterest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetConceptOfInterestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getConceptOfInterest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetConceptsOfInterestDocument: DocumentNode<GetConceptsOfInterestQuery, GetConceptsOfInterestQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getConceptsOfInterest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetConceptsOfInterestInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getConceptsOfInterest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const GetDashboardGraphDocument: DocumentNode<GetDashboardGraphQuery, GetDashboardGraphQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDashboardGraph"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDashboardGraphInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDashboardGraph"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dashboardGraph"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"vizState"}}]}}]}}]}}]};
export const GetDashboardGraphsDocument: DocumentNode<GetDashboardGraphsQuery, GetDashboardGraphsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDashboardGraphs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDashboardGraphsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDashboardGraphs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dashboardGraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"vizState"}}]}}]}}]}}]};
export const GetDataTypeDocument: DocumentNode<GetDataTypeQuery, GetDataTypeQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDataType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDataTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDataType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"deviceTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetDataTypesDocument: DocumentNode<GetDataTypesQuery, GetDataTypesQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDataTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDataTypesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDataTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dataTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetDeviceDocument: DocumentNode<GetDeviceQuery, GetDeviceQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDevice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDeviceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDevice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetActivityDocument: DocumentNode<GetActivityQuery, GetActivityQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActivity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetActivityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getActivity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]}}]};
export const GetDailyDocument: DocumentNode<GetDailyQuery, GetDailyQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDaily"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDailyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDaily"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daily"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"heartRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"average"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}}]}}]}}]}}]};
export const GetHeartRateDocument: DocumentNode<GetHeartRateQuery, GetHeartRateQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHeartRate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetHeartRateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHeartRate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heartRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"point"}}]}}]}}]}}]};
export const GetSleepDocument: DocumentNode<GetSleepQuery, GetSleepQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSleep"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetSleepInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSleep"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sleep"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]}}]};
export const GetIndicationDocument: DocumentNode<GetIndicationQuery, GetIndicationQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetIndicationsDocument: DocumentNode<GetIndicationsQuery, GetIndicationsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIndications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetIndicationsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIndications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetMeasureDocument: DocumentNode<GetMeasureQuery, GetMeasureQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"aggregation"}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dataType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"filters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"}},{"kind":"Field","name":{"kind":"Name","value":"join"}},{"kind":"Field","name":{"kind":"Name","value":"operator"}},{"kind":"Field","name":{"kind":"Name","value":"values"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dataTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"sql"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetMeasuresDocument: DocumentNode<GetMeasuresQuery, GetMeasuresQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeasures"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMeasuresInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMeasures"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dataTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]};
export const GetTemplateDocument: DocumentNode<GetTemplateQuery, GetTemplateQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTemplateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"read"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"readOne"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upsert"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}}]}}]}}]}}]}}]}}]};
export const GetTemplatesDocument: DocumentNode<GetTemplatesQuery, GetTemplatesQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTemplates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetTemplatesInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTemplates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"templates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"components"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"props"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"read"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"readOne"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upsert"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"parameters"}}]}}]}}]}}]}}]}}]}}]};
export const GetUserDocument: DocumentNode<GetUserQuery, GetUserQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"devices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]};