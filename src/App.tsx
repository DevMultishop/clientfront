import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

import apolloClient from './services/apollo';

import ToastContainer from './components/ToastContainer';

import defaultTheme from './styles/themes/default';

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <AppProvider>
          <Routes />
        </AppProvider>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </Router>
  </ApolloProvider>
);

export default App;
