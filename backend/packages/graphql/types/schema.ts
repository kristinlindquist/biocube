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
  components?: Maybe<Array<Component>>;
  conceptsOfInterest?: Maybe<Array<ConceptOfInterest>>;
  dataTypes?: Maybe<Array<DataType>>;
  defaultChartType?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  indications?: Maybe<Array<Indication>>;
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
  deleteDataType: DeleteDataTypeResult;
  deleteIndication: DeleteIndicationResult;
  deleteMeasure: DeleteMeasureResult;
  deleteTemplate: DeleteTemplateResult;
  upsertConceptOfInterest: UpsertConceptOfInterestResult;
  upsertDataType: UpsertDataTypeResult;
  upsertIndication: UpsertIndicationResult;
  upsertMeasure: UpsertMeasureResult;
  upsertTemplate: UpsertTemplateResult;
};


export type MutationDeleteConceptOfInterestArgs = {
  input: DeleteConceptOfInterestInput;
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
  defaultChartType?: Maybe<ChartType>;
  description?: Maybe<Scalars['String']>;
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
