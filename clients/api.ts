import { GraphQLClient } from 'graphql-request'

export const getGraphqlClient = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('__vertex_token') : null;

  return new GraphQLClient("http://localhost:4000/graphql", {
    headers: token ? { authorization: `Bearer ${token}` } : {},
  });
}

// import {GraphQLClient} from 'graphql-request'

// const isClient = typeof window !== 'undefined'

// export const graphqlClient = new GraphQLClient("http://localhost:4000/graphql", {
//     headers: {
//         authorization: isClient ? `Bearer ${window.localStorage.getItem('__vertex_token')}` : "",
//     },
// })