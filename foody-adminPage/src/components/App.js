import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from './Admin/Pages/NotFoundPage';
import MenuItemPage from './Admin/Pages/Menu/MenuItemPage';
import AddMenuItemForm from './Admin/Pages/Menu/AddMenuItemForm';
import MainAdminPage from './Admin/Pages/MainAdminPage';
import MenuItemsPage from './Admin/Pages/Menu/MenuItemsPage';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/menu/add" component={AddMenuItemForm} />
          <Route exact path="/menu/:id" component={MenuItemPage} />
          <Route exact path="/menu" component={MenuItemsPage} />
          <Route exact path="/" component={MainAdminPage} />

          <Route exact path="/NotFoundPage" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}
