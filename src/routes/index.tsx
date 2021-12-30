import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import IndicationLink from '../pages/IndicationLink';
import SignUp from '../pages/SignUp';

import Route from './Route';
import ResetPassword from '../pages/ResetPassword';
import DashBoard from '../pages/Dashboard';
import Withdrawal from '../pages/Withdrawal';
import Statment from '../pages/Statment';
import Profile from '../pages/Profile';
import Gains from '../pages/Gains';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} isPrivate={false} />
    <Route path="/forgot" component={ForgotPassword} isPrivate={false} />
    <Route
      path="/register/:indicator_username"
      exact
      component={IndicationLink}
      isPrivate={false}
    />
    <Route path="/signup" component={SignUp} isPrivate={false} />
    <Route path="/reset" component={ResetPassword} isPrivate={false} />
    <Route path="/dashboard" component={DashBoard} isPrivate />
    <Route path="/withdrawal" component={Withdrawal} isPrivate />
    <Route path="/statment" component={Statment} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/gains" component={Gains} isPrivate />
  </Switch>
);

export default Routes;
