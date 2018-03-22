/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';

import CreateAnAccount from 'containers/CreateAnAccount';
import LogIn from 'containers/LogIn';
import Success from 'containers/Success';
import FileSubmitionForm from 'containers/FileSubmitionForm';

import NotificationSystem from 'containers/NotificationSystem';


import injectSaga from 'utils/injectSaga';

import saga from './saga';

import Wrapper from './Wrapper';

const App = () => (
  <Wrapper>
    <Switch>
      <Route path="/register" component={CreateAnAccount} />
      <Route path="/login" component={LogIn} />
      <Route path="/success" component={Success} />
      <Route path="/submit" component={FileSubmitionForm} />
      <Redirect from="/" to="submit" />
    </Switch>
    <NotificationSystem />
  </Wrapper>
);

const withSaga = injectSaga({ key: 'fileSubmitionForm', saga });

export default compose(
  withSaga,
)(App);
