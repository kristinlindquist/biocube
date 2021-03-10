import { GraphQLResolveInfo } from 'graphql';

import { Prisma } from '@backend/db';
import { Logger } from '@backend/utils';
import { Scalars } from './schema';

export type Parent = {
  id: Scalars['Int'];
};

export type Args = any;

export type Context = {
  prisma: Prisma;
  logger: Logger;
};

export type Info = GraphQLResolveInfo;
