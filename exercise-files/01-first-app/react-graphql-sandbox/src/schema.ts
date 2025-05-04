// src/schema.ts

import { gql } from 'apollo-server-express';
import { IResolvers } from '@graphql-tools/utils';

export const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export const resolvers: IResolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!',
  },
};

