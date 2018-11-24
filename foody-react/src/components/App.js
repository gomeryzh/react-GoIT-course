import React, { Component } from 'react';
import AppHeader from './AppHeader';
import OrderHistory from './OrderHistory';
import Menu from './Menu';
import Authentication from './Authentication';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppHeader />
        <Authentication />
        <Menu />
        <OrderHistory />
      </div>
    );
  }
}
