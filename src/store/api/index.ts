import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(`${import.meta.env.VITE_APP_API_URL}/graphql`);

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  refetchOnFocus: true,
  endpoints: () => ({}),
});
