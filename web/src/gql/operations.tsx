/**
 * NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY DIRECTLY.
 */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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
  __typename?: 'Query';
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
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type CreateIndicationResult = {
  __typename?: 'CreateIndicationResult';
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

export type CreateMeasureInput = {
  description: Scalars['String'];
  indications?: Maybe<Array<Maybe<IndicationInput>>>;
  name: Scalars['String'];
};

export type CreateMeasureResult = {
  __typename?: 'CreateMeasureResult';
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

export type CreateIndicationMutationVariables = Exact<{
  input: CreateIndicationInput;
}>;


export type CreateIndicationMutation = (
  { __typename?: 'Mutation' }
  & { createIndication: (
    { __typename?: 'CreateIndicationResult' }
    & { indication?: Maybe<(
      { __typename?: 'Indication' }
      & Pick<Indication, 'id' | 'description' | 'name'>
    )> }
  ) }
);

export type CreateMeasureMutationVariables = Exact<{
  input: CreateMeasureInput;
}>;


export type CreateMeasureMutation = (
  { __typename?: 'Mutation' }
  & { createMeasure: (
    { __typename?: 'CreateMeasureResult' }
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


export const CreateIndicationDocument = gql`
    mutation createIndication($input: CreateIndicationInput!) {
  createIndication(input: $input) {
    indication {
      id
      description
      name
    }
  }
}
    `;
export type CreateIndicationMutationFn = Apollo.MutationFunction<CreateIndicationMutation, CreateIndicationMutationVariables>;

/**
 * __useCreateIndicationMutation__
 *
 * To run a mutation, you first call `useCreateIndicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIndicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIndicationMutation, { data, loading, error }] = useCreateIndicationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIndicationMutation(baseOptions?: Apollo.MutationHookOptions<CreateIndicationMutation, CreateIndicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateIndicationMutation, CreateIndicationMutationVariables>(CreateIndicationDocument, options);
      }
export type CreateIndicationMutationHookResult = ReturnType<typeof useCreateIndicationMutation>;
export type CreateIndicationMutationResult = Apollo.MutationResult<CreateIndicationMutation>;
export type CreateIndicationMutationOptions = Apollo.BaseMutationOptions<CreateIndicationMutation, CreateIndicationMutationVariables>;
export const CreateMeasureDocument = gql`
    mutation createMeasure($input: CreateMeasureInput!) {
  createMeasure(input: $input) {
    measure {
      id
      conceptsOfInterest {
        name
      }
      description
      name
      indications {
        name
      }
    }
  }
}
    `;
export type CreateMeasureMutationFn = Apollo.MutationFunction<CreateMeasureMutation, CreateMeasureMutationVariables>;

/**
 * __useCreateMeasureMutation__
 *
 * To run a mutation, you first call `useCreateMeasureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMeasureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMeasureMutation, { data, loading, error }] = useCreateMeasureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMeasureMutation(baseOptions?: Apollo.MutationHookOptions<CreateMeasureMutation, CreateMeasureMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMeasureMutation, CreateMeasureMutationVariables>(CreateMeasureDocument, options);
      }
export type CreateMeasureMutationHookResult = ReturnType<typeof useCreateMeasureMutation>;
export type CreateMeasureMutationResult = Apollo.MutationResult<CreateMeasureMutation>;
export type CreateMeasureMutationOptions = Apollo.BaseMutationOptions<CreateMeasureMutation, CreateMeasureMutationVariables>;
export const GetDeviceDocument = gql`
    query getDevice($input: GetDeviceInput!) {
  getDevice(input: $input) {
    device {
      id
      userId
      name
    }
  }
}
    `;

/**
 * __useGetDeviceQuery__
 *
 * To run a query within a React component, call `useGetDeviceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDeviceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeviceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDeviceQuery(baseOptions: Apollo.QueryHookOptions<GetDeviceQuery, GetDeviceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDeviceQuery, GetDeviceQueryVariables>(GetDeviceDocument, options);
      }
export function useGetDeviceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDeviceQuery, GetDeviceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDeviceQuery, GetDeviceQueryVariables>(GetDeviceDocument, options);
        }
export type GetDeviceQueryHookResult = ReturnType<typeof useGetDeviceQuery>;
export type GetDeviceLazyQueryHookResult = ReturnType<typeof useGetDeviceLazyQuery>;
export type GetDeviceQueryResult = Apollo.QueryResult<GetDeviceQuery, GetDeviceQueryVariables>;
export const GetActivityDocument = gql`
    query getActivity($input: GetActivityInput!) {
  getActivity(input: $input) {
    activity {
      start
      end
      duration
      type
    }
  }
}
    `;

/**
 * __useGetActivityQuery__
 *
 * To run a query within a React component, call `useGetActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivityQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetActivityQuery(baseOptions: Apollo.QueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
      }
export function useGetActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivityQuery, GetActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivityQuery, GetActivityQueryVariables>(GetActivityDocument, options);
        }
export type GetActivityQueryHookResult = ReturnType<typeof useGetActivityQuery>;
export type GetActivityLazyQueryHookResult = ReturnType<typeof useGetActivityLazyQuery>;
export type GetActivityQueryResult = Apollo.QueryResult<GetActivityQuery, GetActivityQueryVariables>;
export const GetDailyDocument = gql`
    query getDaily($input: GetDailyInput!) {
  getDaily(input: $input) {
    daily {
      date
      heartRate {
        average
        min
        max
      }
    }
  }
}
    `;

/**
 * __useGetDailyQuery__
 *
 * To run a query within a React component, call `useGetDailyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDailyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDailyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetDailyQuery(baseOptions: Apollo.QueryHookOptions<GetDailyQuery, GetDailyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDailyQuery, GetDailyQueryVariables>(GetDailyDocument, options);
      }
export function useGetDailyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDailyQuery, GetDailyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDailyQuery, GetDailyQueryVariables>(GetDailyDocument, options);
        }
export type GetDailyQueryHookResult = ReturnType<typeof useGetDailyQuery>;
export type GetDailyLazyQueryHookResult = ReturnType<typeof useGetDailyLazyQuery>;
export type GetDailyQueryResult = Apollo.QueryResult<GetDailyQuery, GetDailyQueryVariables>;
export const GetHeartRateDocument = gql`
    query getHeartRate($input: GetHeartRateInput!) {
  getHeartRate(input: $input) {
    heartRate {
      date
      point
    }
  }
}
    `;

/**
 * __useGetHeartRateQuery__
 *
 * To run a query within a React component, call `useGetHeartRateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHeartRateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHeartRateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetHeartRateQuery(baseOptions: Apollo.QueryHookOptions<GetHeartRateQuery, GetHeartRateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHeartRateQuery, GetHeartRateQueryVariables>(GetHeartRateDocument, options);
      }
export function useGetHeartRateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHeartRateQuery, GetHeartRateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHeartRateQuery, GetHeartRateQueryVariables>(GetHeartRateDocument, options);
        }
export type GetHeartRateQueryHookResult = ReturnType<typeof useGetHeartRateQuery>;
export type GetHeartRateLazyQueryHookResult = ReturnType<typeof useGetHeartRateLazyQuery>;
export type GetHeartRateQueryResult = Apollo.QueryResult<GetHeartRateQuery, GetHeartRateQueryVariables>;
export const GetSleepDocument = gql`
    query getSleep($input: GetSleepInput!) {
  getSleep(input: $input) {
    sleep {
      start
      end
      state
    }
  }
}
    `;

/**
 * __useGetSleepQuery__
 *
 * To run a query within a React component, call `useGetSleepQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSleepQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSleepQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSleepQuery(baseOptions: Apollo.QueryHookOptions<GetSleepQuery, GetSleepQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSleepQuery, GetSleepQueryVariables>(GetSleepDocument, options);
      }
export function useGetSleepLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSleepQuery, GetSleepQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSleepQuery, GetSleepQueryVariables>(GetSleepDocument, options);
        }
export type GetSleepQueryHookResult = ReturnType<typeof useGetSleepQuery>;
export type GetSleepLazyQueryHookResult = ReturnType<typeof useGetSleepLazyQuery>;
export type GetSleepQueryResult = Apollo.QueryResult<GetSleepQuery, GetSleepQueryVariables>;
export const GetIndicationDocument = gql`
    query getIndication($input: GetIndicationInput!) {
  getIndication(input: $input) {
    indication {
      id
      description
      name
    }
  }
}
    `;

/**
 * __useGetIndicationQuery__
 *
 * To run a query within a React component, call `useGetIndicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndicationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetIndicationQuery(baseOptions: Apollo.QueryHookOptions<GetIndicationQuery, GetIndicationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndicationQuery, GetIndicationQueryVariables>(GetIndicationDocument, options);
      }
export function useGetIndicationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndicationQuery, GetIndicationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndicationQuery, GetIndicationQueryVariables>(GetIndicationDocument, options);
        }
export type GetIndicationQueryHookResult = ReturnType<typeof useGetIndicationQuery>;
export type GetIndicationLazyQueryHookResult = ReturnType<typeof useGetIndicationLazyQuery>;
export type GetIndicationQueryResult = Apollo.QueryResult<GetIndicationQuery, GetIndicationQueryVariables>;
export const GetIndicationsDocument = gql`
    query getIndications($input: GetIndicationsInput!) {
  getIndications(input: $input) {
    indications {
      id
      description
      name
    }
  }
}
    `;

/**
 * __useGetIndicationsQuery__
 *
 * To run a query within a React component, call `useGetIndicationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIndicationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIndicationsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetIndicationsQuery(baseOptions: Apollo.QueryHookOptions<GetIndicationsQuery, GetIndicationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIndicationsQuery, GetIndicationsQueryVariables>(GetIndicationsDocument, options);
      }
export function useGetIndicationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIndicationsQuery, GetIndicationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIndicationsQuery, GetIndicationsQueryVariables>(GetIndicationsDocument, options);
        }
export type GetIndicationsQueryHookResult = ReturnType<typeof useGetIndicationsQuery>;
export type GetIndicationsLazyQueryHookResult = ReturnType<typeof useGetIndicationsLazyQuery>;
export type GetIndicationsQueryResult = Apollo.QueryResult<GetIndicationsQuery, GetIndicationsQueryVariables>;
export const GetMeasureDocument = gql`
    query getMeasure($input: GetMeasureInput!) {
  getMeasure(input: $input) {
    measure {
      id
      conceptsOfInterest {
        name
      }
      description
      name
      indications {
        name
      }
    }
  }
}
    `;

/**
 * __useGetMeasureQuery__
 *
 * To run a query within a React component, call `useGetMeasureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeasureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeasureQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMeasureQuery(baseOptions: Apollo.QueryHookOptions<GetMeasureQuery, GetMeasureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeasureQuery, GetMeasureQueryVariables>(GetMeasureDocument, options);
      }
export function useGetMeasureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeasureQuery, GetMeasureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeasureQuery, GetMeasureQueryVariables>(GetMeasureDocument, options);
        }
export type GetMeasureQueryHookResult = ReturnType<typeof useGetMeasureQuery>;
export type GetMeasureLazyQueryHookResult = ReturnType<typeof useGetMeasureLazyQuery>;
export type GetMeasureQueryResult = Apollo.QueryResult<GetMeasureQuery, GetMeasureQueryVariables>;
export const GetMeasuresDocument = gql`
    query getMeasures($input: GetMeasuresInput!) {
  getMeasures(input: $input) {
    measures {
      id
      description
      name
      indications {
        id
        name
        description
      }
    }
  }
}
    `;

/**
 * __useGetMeasuresQuery__
 *
 * To run a query within a React component, call `useGetMeasuresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeasuresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeasuresQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMeasuresQuery(baseOptions: Apollo.QueryHookOptions<GetMeasuresQuery, GetMeasuresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeasuresQuery, GetMeasuresQueryVariables>(GetMeasuresDocument, options);
      }
export function useGetMeasuresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeasuresQuery, GetMeasuresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeasuresQuery, GetMeasuresQueryVariables>(GetMeasuresDocument, options);
        }
export type GetMeasuresQueryHookResult = ReturnType<typeof useGetMeasuresQuery>;
export type GetMeasuresLazyQueryHookResult = ReturnType<typeof useGetMeasuresLazyQuery>;
export type GetMeasuresQueryResult = Apollo.QueryResult<GetMeasuresQuery, GetMeasuresQueryVariables>;
export const GetUserDocument = gql`
    query getUser($input: GetUserInput!) {
  getUser(input: $input) {
    user {
      id
      email
      name
      devices {
        id
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;