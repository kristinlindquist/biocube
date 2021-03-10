import { ApolloServerExpressConfig } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { typeDefs, resolvers } from 'graphql-scalars';
import { prisma } from '@backend/db';
import { logger } from '@backend/utils';
import GraphQLApi, { GraphQLApiArgs } from './api';
import schema from './schema';

const GraphQLServerOptions: ApolloServerExpressConfig = {
  schema,
  resolvers,
  typeDefs,
  context: (context: ExpressContext) => ({
    ...context,
    prisma,
    logger
  })
};

export { GraphQLApi, GraphQLApiArgs, schema, GraphQLServerOptions };
