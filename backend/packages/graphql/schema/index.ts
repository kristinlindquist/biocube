import { GraphQLSchema } from 'graphql';
import { join } from 'path';
import { flatten } from 'lodash';
import {
  loadFilesSync,
  makeExecutableSchema,
  mergeResolvers,
  mergeTypeDefs,
} from 'graphql-tools';

import { aspectOfHealthResolvers } from './aspectOfHealth';
import { conceptOfInterestResolvers } from './conceptOfInterest';
import { dashboardGraphResolvers } from './dashboardGraph';
import { dataTypeResolvers } from './dataType';
import { deviceResolvers } from './device';
import { googleFitResolvers } from './googlefit';
import { indicationResolvers } from './indication';
import { measureResolvers } from './measure';
import { templateResolvers } from './template';
import { userResolvers } from './user';

const resolvers = mergeResolvers([
  aspectOfHealthResolvers,
  conceptOfInterestResolvers,
  dashboardGraphResolvers,
  dataTypeResolvers,
  deviceResolvers,
  googleFitResolvers,
  indicationResolvers,
  measureResolvers,
  userResolvers,
  templateResolvers,
]);

const types = loadFilesSync(join(__dirname, './**/types.graphql'));
const queries = loadFilesSync(join(__dirname, './**/queries.graphql'));
const mutations = loadFilesSync(join(__dirname, './**/mutations.graphql'));

const typeDefs = mergeTypeDefs(flatten([mutations, queries, types]));

const schema: GraphQLSchema = makeExecutableSchema({ resolvers, typeDefs });

export default schema;
