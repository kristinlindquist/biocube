/**
 * GraphQLApi
 * This helps with seamless access to GraphQL api in a non-graphql
 * context such as custom REST routes or testing environments
 */
import { getAspectOfHealth, getAspectsOfHealth } from './queries/aspectOfHealth';
import {
  getConceptOfInterest,
  getConceptsOfInterest,
} from './queries/conceptOfInterest';
import { getDevice } from './queries/device';

import { getDashboardGraph, getDashboardGraphs } from './queries/dashboardGraph';
import { getDataType, getDataTypes } from './queries/dataType';
import { getMeasure, getMeasures } from './queries/measure';
import { getIndication, getIndications } from './queries/indication';
import { getTemplate, getTemplates } from './queries/template';
import { getUser } from './queries/user';
import { syncGoogleFit } from './queries/googlefit';

const allQueries = {
  getAspectOfHealth,
  getAspectsOfHealth,
  getConceptOfInterest,
  getConceptsOfInterest,
  getDashboardGraph,
  getDashboardGraphs,
  getDataType,
  getDataTypes,
  getDevice,
  getMeasures,
  getMeasure,
  getIndication,
  getIndications,
  getTemplate,
  getTemplates,
  getUser,
  syncGoogleFit,
};

import { Context } from '../types/resolvers';
import schema from '../schema';
import { graphql, print, DocumentNode } from 'graphql';
import {
  GetAspectOfHealthInput,
  GetAspectOfHealthResult,
  GetAspectsOfHealthInput,
  GetAspectsOfHealthResult,
  GetConceptOfInterestInput,
  GetConceptOfInterestResult,
  GetConceptsOfInterestInput,
  GetConceptsOfInterestResult,
  GetDashboardGraphInput,
  GetDashboardGraphResult,
  GetDashboardGraphsInput,
  GetDashboardGraphsResult,
  GetDataTypeInput,
  GetDataTypeResult,
  GetDataTypesInput,
  GetDataTypesResult,
  GetDeviceInput,
  GetDeviceResult,
  GetIndicationInput,
  GetIndicationResult,
  GetIndicationsInput,
  GetIndicationsResult,
  GetMeasuresInput,
  GetMeasuresResult,
  GetMeasureInput,
  GetMeasureResult,
  GetTemplateInput,
  GetTemplateResult,
  GetTemplatesResult,
  GetTemplatesInput,
  GetUserInput,
  GetUserResult,
  SyncGoogleFitInput,
  SyncGoogleFitResult,
} from '../types';

type GraphQLApiArgs = {
  context: Context;
};

type GraphQLRequest = {
  query?: string;
  variables: any;
  context?: Context;
  operationName: string;
};

class GraphQLApi {
  private context: Context;

  constructor({ context }: GraphQLApiArgs) {
    this.context = context;
  }

  async getAspectOfHealth(
    input: GetAspectOfHealthInput,
    context?: Context,
  ): Promise<GetAspectOfHealthResult> {
    const operationName = 'getAspectOfHealth';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getAspectsOfHealth(
    input: GetAspectsOfHealthInput,
    context?: Context,
  ): Promise<GetAspectsOfHealthResult> {
    const operationName = 'getAspectsOfHealth';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getConceptsOfInterest(
    input: GetConceptsOfInterestInput,
    context?: Context,
  ): Promise<GetConceptsOfInterestResult> {
    const operationName = 'getConceptsOfInterest';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getConceptOfInterest(
    input: GetConceptOfInterestInput,
    context?: Context,
  ): Promise<GetConceptOfInterestResult> {
    const operationName = 'getMeasure';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getDashboardGraph(
    input: GetDashboardGraphInput,
    context?: Context,
  ): Promise<GetDashboardGraphResult> {
    const operationName = 'getDashboardGraph';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getDashboardGraphs(
    input: GetDashboardGraphsInput,
    context?: Context,
  ): Promise<GetDashboardGraphsResult> {
    const operationName = 'getDashboardGraphs';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getDataType(
    input: GetDataTypeInput,
    context?: Context,
  ): Promise<GetDataTypeResult> {
    const operationName = 'getDataType';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getDataTypes(
    input: GetDataTypesInput,
    context?: Context,
  ): Promise<GetDataTypesResult> {
    const operationName = 'getDataTypes';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getDevice(
    input: GetDeviceInput,
    context?: Context,
  ): Promise<GetDeviceResult> {
    const operationName = 'getDevice';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getMeasures(
    input: GetMeasuresInput,
    context?: Context,
  ): Promise<GetMeasuresResult> {
    const operationName = 'getMeasures';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getMeasure(
    input: GetMeasureInput,
    context?: Context,
  ): Promise<GetMeasureResult> {
    const operationName = 'getMeasure';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getIndication(
    input: GetIndicationInput,
    context?: Context,
  ): Promise<GetIndicationResult> {
    const operationName = 'getIndication';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getIndications(
    input: GetIndicationsInput,
    context?: Context,
  ): Promise<GetIndicationsResult> {
    const operationName = 'getIndications';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getTemplates(
    input: GetTemplatesInput,
    context?: Context,
  ): Promise<GetTemplatesResult> {
    const operationName = 'getTemplates';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getTemplate(
    input: GetTemplateInput,
    context?: Context,
  ): Promise<GetTemplateResult> {
    const operationName = 'getTemplate';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async getUser(
    input: GetUserInput,
    context?: Context,
  ): Promise<GetUserResult> {
    const operationName = 'getUser';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  async syncGoogleFit(
    input: SyncGoogleFitInput,
    context?: Context,
  ): Promise<SyncGoogleFitResult> {
    const operationName = 'syncGoogleFit';
    const variables = { input };
    return this.graphqlRequest({
      operationName,
      variables,
      context,
    });
  }

  private async graphqlRequest({
    query,
    variables,
    context,
    operationName,
  }: GraphQLRequest): Promise<any> {
    const queryNode: DocumentNode = allQueries[operationName];
    const queryNodeString: string = print(queryNode);
    const source: string = query || queryNodeString;

    const contextValue = (context = context
      ? { ...this.context, ...context }
      : this.context);
    const { data, errors } = await graphql({
      schema,
      source,
      variableValues: variables,
      contextValue,
    });

    if (errors && errors.length) {
      throw errors[0];
    }

    if (!data) {
      throw new Error(`Invalid query ${operationName}.`);
    }

    return data[operationName];
  }
}

export { GraphQLApi as default, GraphQLApiArgs, allQueries };
