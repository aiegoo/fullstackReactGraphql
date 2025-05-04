// src/graphql/client.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Change to your GraphQL endpoint
  cache: new InMemoryCache(),
});

