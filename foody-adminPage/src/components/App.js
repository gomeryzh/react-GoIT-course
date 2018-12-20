import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';

import NotFoundPage from './Admin/Pages/NotFoundPage';
import Loader from './Admin/Loader/Loader';
// import MenuItemPage from './Admin/Pages/Menu/MenuItemPage';
// import AddMenuItemForm from './Admin/Pages/Menu/AddMenuItemForm';
// import MainAdminPage from './Admin/Pages/MainAdminPage';
// import MenuItemsPage from './Admin/Pages/Menu/MenuItemsPage';

// const AsyncMenuItemsPage = Loadable({
//   loader: () => import('./Admin/Pages/Menu/MenuItemsPage'/* webpackChunkName: "MenuItemsPage"
//   */),
//   loading: () => <h1>Loading...</h1>,
// });

const AsyncMenuItemsPage = lazy(
  () => import('./Admin/Pages/Menu/MenuItemsPage'),
  /* webpackChunkName: "MenuItemsPage"
   */
);

// const AsyncMenuItemPage = Loadable({
//   loader: () => import('./Admin/Pages/Menu/MenuItemPage'/* webpackChunkName: "MenuItemPage"
//   */),
//   loading: () => <h1>Loading...</h1>,
// });

const AsyncMenuItemPage = lazy(
  () => import('./Admin/Pages/Menu/MenuItemPage'),
  /* webpackChunkName: "MenuItemPage"
   */
);

// const AsyncAddMenuItemForm = Loadable({
//   loader: () => import('./Admin/Pages/Menu/AddMenuItemForm'/* webpackChunkName: "AddMenuItemForm"
//   */),
//   loading: () => <h1>Loading...</h1>,
// });

const AsyncAddMenuItemForm = lazy(
  () => import('./Admin/Pages/Menu/AddMenuItemForm'),
  /* webpackChunkName: "AddMenuItemForm"
   */
);

// const AsyncMainAdminPage = Loadable({
//   loader: () => import('./Admin/Pages/MainAdminPage'/* webpackChunkName: "MenuItemPage"
//   */),
//   loading: () => <h1>Loading...</h1>,
// });

const AsyncMainAdminPage = lazy(
  () => import('./Admin/Pages/MainAdminPage'),
  /* webpackChunkName: "MainAdminPage"
   */
);

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route exact path="/menu/add" component={AsyncAddMenuItemForm} />
            <Route exact path="/menu/:id" component={AsyncMenuItemPage} />
            <Route exact path="/menu" component={AsyncMenuItemsPage} />
            <Route exact path="/" component={AsyncMainAdminPage} />

            <Route exact path="/NotFoundPage" component={NotFoundPage} />
          </Suspense>
        </Switch>
      </div>
    );
  }
}
