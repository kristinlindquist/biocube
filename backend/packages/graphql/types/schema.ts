/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY DIRECTLY.
 */
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
