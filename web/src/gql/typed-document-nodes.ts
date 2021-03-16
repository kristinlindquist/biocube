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
  upsertMeasure: UpsertMeasureResult;
};


export type MutationCreateIndicationArgs = {
  input: CreateIndicationInput;
};


export type MutationUpsertMeasureArgs = {
  input: UpsertMeasureInput;
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

export type UpsertMeasureInput = {
  id?: Maybe<Scalars['Int']>;
  description: Scalars['String'];
  name: Scalars['String'];
  indications: Array<IndicationInput>;
};

export type UpsertMeasureResult = {
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
  id?: Maybe<Scalars['Int']>;
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

export type CreateIndicationMutationVariables = Exact<{
  input: CreateIndicationInput;
}>;


export type CreateIndicationMutation = { createIndication: { indication?: Maybe<Pick<Indication, 'id' | 'description' | 'name'>> } };

export type UpsertMeasureMutationVariables = Exact<{
  input: UpsertMeasureInput;
}>;


export type UpsertMeasureMutation = { upsertMeasure: { measure?: Maybe<(
      Pick<Measure, 'id' | 'description' | 'name'>
      & { indications?: Maybe<Array<Pick<Indication, 'id' | 'name'>>> }
    )> } };

export type GetDeviceQueryVariables = Exact<{
  input: GetDeviceInput;
}>;


export type GetDeviceQuery = { getDevice: { device?: Maybe<Pick<Device, 'id' | 'userId' | 'name'>> } };

export type GetActivityQueryVariables = Exact<{
  input: GetActivityInput;
}>;


export type GetActivityQuery = { getActivity: { activity?: Maybe<Array<Maybe<Pick<Activity, 'start' | 'end' | 'duration' | 'type'>>>> } };

export type GetDailyQueryVariables = Exact<{
  input: GetDailyInput;
}>;


export type GetDailyQuery = { getDaily: { daily?: Maybe<Array<Maybe<(
      Pick<Daily, 'date'>
      & { heartRate?: Maybe<Pick<HeartRateSummary, 'average' | 'min' | 'max'>> }
    )>>> } };

export type GetHeartRateQueryVariables = Exact<{
  input: GetHeartRateInput;
}>;


export type GetHeartRateQuery = { getHeartRate: { heartRate?: Maybe<Array<Maybe<Pick<HeartRate, 'date' | 'point'>>>> } };

export type GetSleepQueryVariables = Exact<{
  input: GetSleepInput;
}>;


export type GetSleepQuery = { getSleep: { sleep?: Maybe<Array<Maybe<Pick<Sleep, 'start' | 'end' | 'state'>>>> } };

export type GetIndicationQueryVariables = Exact<{
  input: GetIndicationInput;
}>;


export type GetIndicationQuery = { getIndication: { indication?: Maybe<Pick<Indication, 'id' | 'description' | 'name'>> } };

export type GetIndicationsQueryVariables = Exact<{
  input: GetIndicationsInput;
}>;


export type GetIndicationsQuery = { getIndications: { indications?: Maybe<Array<Maybe<Pick<Indication, 'id' | 'description' | 'name'>>>> } };

export type GetMeasureQueryVariables = Exact<{
  input: GetMeasureInput;
}>;


export type GetMeasureQuery = { getMeasure: { measure?: Maybe<(
      Pick<Measure, 'id' | 'description' | 'name'>
      & { conceptsOfInterest?: Maybe<Array<Pick<ConceptOfInterest, 'name'>>>, indications?: Maybe<Array<Pick<Indication, 'name'>>> }
    )> } };

export type GetMeasuresQueryVariables = Exact<{
  input: GetMeasuresInput;
}>;


export type GetMeasuresQuery = { getMeasures: { measures?: Maybe<Array<Maybe<(
      Pick<Measure, 'id' | 'description' | 'name'>
      & { indications?: Maybe<Array<Pick<Indication, 'id' | 'name' | 'description'>>> }
    )>>> } };

export type GetUserQueryVariables = Exact<{
  input: GetUserInput;
}>;


export type GetUserQuery = { getUser: { user?: Maybe<(
      Pick<User, 'id' | 'email' | 'name'>
      & { devices?: Maybe<Array<Maybe<Pick<Device, 'id'>>>> }
    )> } };


export const CreateIndicationDocument: DocumentNode<CreateIndicationMutation, CreateIndicationMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const UpsertMeasureDocument: DocumentNode<UpsertMeasureMutation, UpsertMeasureMutationVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]};
export const GetDeviceDocument: DocumentNode<GetDeviceQuery, GetDeviceQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDevice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDeviceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDevice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const GetActivityDocument: DocumentNode<GetActivityQuery, GetActivityQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActivity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetActivityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getActivity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]};
export const GetDailyDocument: DocumentNode<GetDailyQuery, GetDailyQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getDaily"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetDailyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getDaily"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"daily"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"heartRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"average"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}}]}}]}}]}}]}}]};
export const GetHeartRateDocument: DocumentNode<GetHeartRateQuery, GetHeartRateQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHeartRate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetHeartRateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getHeartRate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heartRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"point"}}]}}]}}]}}]};
export const GetSleepDocument: DocumentNode<GetSleepQuery, GetSleepQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSleep"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetSleepInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSleep"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sleep"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]}}]};
export const GetIndicationDocument: DocumentNode<GetIndicationQuery, GetIndicationQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIndication"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetIndicationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIndication"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indication"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const GetIndicationsDocument: DocumentNode<GetIndicationsQuery, GetIndicationsQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIndications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetIndicationsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIndications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]};
export const GetMeasureDocument: DocumentNode<GetMeasureQuery, GetMeasureQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeasure"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMeasureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMeasure"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measure"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"conceptsOfInterest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]};
export const GetMeasuresDocument: DocumentNode<GetMeasuresQuery, GetMeasuresQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getMeasures"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetMeasuresInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMeasures"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"measures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"indications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]};
export const GetUserDocument: DocumentNode<GetUserQuery, GetUserQueryVariables> = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"devices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]};