/**
 * GraphQLApi
 * This helps with seamless access to GraphQL api in a non-graphql
 * context such as custom REST routes or testing environments
 */
import getUser from './queries/user/getUser';
import getDevice from './queries/device/getDevice';
import {
  getConceptOfInterest,
  getConceptsOfInterest,
} from './queries/conceptOfInterest';
import { getMeasures, getMeasure } from './queries/measure';
import { getIndication, getIndications } from './queries/indication';
import { getTemplate, getTemplates } from './queries/template';
import { getHeartRate } from './queries/googlefit';

const allQueries = {
  getConceptOfInterest,
  getConceptsOfInterest,
  getDevice,
  getHeartRate,
  getMeasures,
  getMeasure,
  getIndication,
  getIndications,
  getTemplate,
  getTemplates,
  getUser,
};

import { Context } from '../types/resolvers';
import schema from '../schema';
import { graphql, print, DocumentNode } from 'graphql';
import {
  GetConceptOfInterestInput,
  GetConceptOfInterestResult,
  GetConceptsOfInterestInput,
  GetConceptsOfInterestResult,
  GetDeviceInput,
  GetDeviceResult,
  GetHeartRateInput,
  GetHeartRateResult,
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

  async getHeartRate(
    input: GetHeartRateInput,
    context?: Context,
  ): Promise<GetHeartRateResult> {
    const operationName = 'getHeartRate';
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
