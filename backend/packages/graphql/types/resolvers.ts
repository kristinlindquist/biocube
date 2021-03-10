import { Prisma } from '@backend/db';
import { Logger } from '@backend/utils';
import { GraphQLScalarType, Kind, GraphQLResolveInfo } from 'graphql';
import { Scalars } from './schema';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

export type Date = typeof dateScalar;

export type Parent = {
  id: Scalars['Int'];
};

export type Args = any;

export type Context = {
  prisma: Prisma;
  logger: Logger;
};

export type Info = GraphQLResolveInfo;
