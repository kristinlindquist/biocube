import { GraphQLSchema } from 'graphql';
import { join } from 'path';
import { flatten } from 'lodash';
import { mergeResolvers, mergeTypeDefs, makeExecutableSchema, loadFilesSync } from 'graphql-tools';

import { userResolvers } from './user';
import { deviceResolvers } from './device';
import { measureResolvers } from './measure';
import { heartRateResolvers } from './googlefit';

const resolvers = mergeResolvers([userResolvers, deviceResolvers, heartRateResolvers, measureResolvers]);

const types = loadFilesSync(join(__dirname, './**/types.graphql'));
const queries = loadFilesSync(join(__dirname, './**/queries.graphql'));
const mutations = loadFilesSync(join(__dirname, './**/mutations.graphql'));

const typeDefs = mergeTypeDefs(flatten([types, queries, mutations]));

const schema: GraphQLSchema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
