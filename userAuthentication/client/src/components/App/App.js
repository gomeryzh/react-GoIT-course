import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import * as operations from '../../redux/operations';
import { SignIn, SignUp } from '../../pages';
import Header from '../Header/Header';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Profile from '../../pages/Profile';
import Dashboard from '../../pages/Dashboard';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

const App = () => (
  <div className="App">
    <Header />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </Switch>
  </div>
);

const mapDispatch = {
  refreshCurrenUser: operations.refreshCurrenUser
};

export default connect(
  null,
  mapDispatch
)(App);
