import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import NotAuthenticatedlayout from '../pages/_layouts/NotAuthenticated';
import Authenticatedlayout from '../pages/_layouts/Authenticated';
import { useAuth } from '../hooks/Auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate: boolean;
  component: React.ComponentType;
}

export default function Route({
  isPrivate = false,
  component: Component,
  ...rest
}: RouteProps): JSX.Element {
  const { token } = useAuth();
  const signed = !!token;

  const Layout = signed ? Authenticatedlayout : NotAuthenticatedlayout;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === signed ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
