export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Device = {
  __typename?: 'Device';
  id: Scalars['ID'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  devices?: Maybe<Array<Maybe<Device>>>;
};

export type Query = {
  __typename?: 'Query';
  getDevice: GetDeviceResult;
  getUser: GetUserResult;
};

export type QueryGetDeviceArgs = {
  input: GetDeviceInput;
};

export type QueryGetUserArgs = {
  input: GetUserInput;
};

export type GetDeviceInput = {
  id: Scalars['ID'];
};

export type GetDeviceResult = {
  __typename?: 'GetDeviceResult';
  device?: Maybe<Device>;
};

export type GetUserInput = {
  id: Scalars['ID'];
};

export type GetUserResult = {
  __typename?: 'GetUserResult';
  user?: Maybe<User>;
};
