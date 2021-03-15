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
};

export type Query = {
  getActivity: GetActivityResult;
  getDaily: GetDailyResult;
  getDevice: GetDeviceResult;
  getHeartRate: GetHeartRateResult;
  getIndication: GetIndicationResult;
  getIndications: GetIndicationsResult;
  getMeasure: GetMeasureResult;
  getMeasures: GetMeasuresResult;
  getSleep: GetSleepResult;
  getUser: GetUserResult;
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


export type QueryGetUserArgs = {
  input: GetUserInput;
};

export type GetDeviceInput = {
  id: Scalars['Int'];
};

export type GetDeviceResult = {
  device?: Maybe<Device>;
};

export type Device = {
  id: Scalars['Int'];
  userId: Scalars['Int'];
  name: Scalars['String'];
};


export type GetHeartRateInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type GetHeartRateResult = {
  heartRate?: Maybe<Array<Maybe<HeartRate>>>;
};

export type GetSleepInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type GetSleepResult = {
  sleep?: Maybe<Array<Maybe<Sleep>>>;
};

export type GetDailyInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type GetDailyResult = {
  daily?: Maybe<Array<Maybe<Daily>>>;
};

export type GetActivityInput = {
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
};

export type GetActivityResult = {
  activity?: Maybe<Array<Maybe<Activity>>>;
};

export type HeartRateSummary = {
  average?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
};

export type Activity = {
  start?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['String']>;
};

export type Daily = {
  date?: Maybe<Scalars['Float']>;
  heartRate?: Maybe<HeartRateSummary>;
};

export type HeartRate = {
  date?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type OxygenSaturation = {
  date?: Maybe<Scalars['Float']>;
  point?: Maybe<Scalars['Float']>;
};

export type Sleep = {
  start?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
};

export type Mutation = {
  createIndication: CreateIndicationResult;
  createMeasure: CreateMeasureResult;
};


export type MutationCreateIndicationArgs = {
  input: CreateIndicationInput;
};


export type MutationCreateMeasureArgs = {
  input: CreateMeasureInput;
};

export type CreateIndicationInput = {
  description: Scalars['String'];
  indication?: Maybe<IndicationInput>;
  name: Scalars['String'];
};

export type IndicationInput = {
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CreateIndicationResult = {
  indication?: Maybe<Indication>;
};

export type GetIndicationsInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetIndicationsResult = {
  indications?: Maybe<Array<Maybe<Indication>>>;
};

export type GetIndicationInput = {
  id: Scalars['Int'];
};

export type GetIndicationResult = {
  indication?: Maybe<Indication>;
};

export type Indication = {
  conceptsOfInterest?: Maybe<Array<ConceptOfInterest>>;
  description: Scalars['String'];
  id: Scalars['Int'];
  indications?: Maybe<Array<Indication>>;
  name: Scalars['String'];
};

export type ConceptOfInterest = {
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CreateMeasureInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  indications: Array<IndicationInput>;
};

export type CreateMeasureResult = {
  measure?: Maybe<Measure>;
};

export type GetMeasuresInput = {
  test?: Maybe<Scalars['Boolean']>;
};

export type GetMeasuresResult = {
  measures?: Maybe<Array<Maybe<Measure>>>;
};

export type GetMeasureInput = {
  id: Scalars['Int'];
};

export type GetMeasureResult = {
  measure?: Maybe<Measure>;
};

export type Measure = {
  id: Scalars['Int'];
  description: Scalars['String'];
  name: Scalars['String'];
  conceptsOfInterest?: Maybe<Array<ConceptOfInterest>>;
  indications?: Maybe<Array<Indication>>;
};

export type GetUserInput = {
  id: Scalars['Int'];
};

export type GetUserResult = {
  user?: Maybe<User>;
};

export type User = {
  id: Scalars['Int'];
  email: Scalars['String'];
  name: Scalars['String'];
  devices?: Maybe<Array<Maybe<Device>>>;
};
