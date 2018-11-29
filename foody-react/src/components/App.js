import React, { Component } from 'react';
import AppHeader from './AppHeader';

import Menu from './Menu';
import Authentication from './Authentication';
import HandleModal from './Modal/HandleModal';

export default class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppHeader />
        <HandleModal />
        <Authentication />
        <Menu />
      </div>
    );
  }
}
