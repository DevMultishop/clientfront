import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';

import { toast } from 'react-toastify';

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('@phoenix-client:token');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (networkError) {
    toast.warning('Network error, please try again later');
  }
  if (graphQLErrors) {
    const [graphQLError] = graphQLErrors;
    if (
      graphQLError.message === 'session_expired' ||
      graphQLError.message === 'Not authorized' ||
      graphQLError.message === 'Context creation failed: Unauthorized'
    ) {
      const token = localStorage.getItem('@phoenix-client:token');
      if (token) {
        localStorage.removeItem('@phoenix-client:token');
        toast.error('Your session has expired ...');
        setTimeout(() => window.location.reload(), 3000);
      }
    } else toast.error(graphQLError.message);
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([
    errorLink,
    authLink,
    uploadLink as unknown as ApolloLink,
  ]),
  cache: new InMemoryCache(),
});

export default client;
