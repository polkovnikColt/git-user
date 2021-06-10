import {ApolloClient, InMemoryCache} from '@apollo/client';

//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

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
});
