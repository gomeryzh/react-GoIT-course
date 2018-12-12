import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from './Header/AppHeader';

import Menu from './Menu/Menu';
import AdminMenuPage from './Admin/Pages/Menu/AdminMenuPage';
import NotFoundPage from './Admin/Pages/NotFoundPage';

import Authentication from './Header/UserMenu/Authentication';
import HandleModal from './Modal/HandleModal';
import MainAdminPage from './Admin/Pages/MainAdminPage';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Route path="/menu" component={AdminMenuPage} />
          <Route exact path="/mainAdminPage" component={MainAdminPage} />
          <Route exact path="/" component={NotFoundPage} />
        </Switch>
        <AppHeader />
        <HandleModal />
        <Authentication />
        <Menu />
      </div>
    );
  }
}
