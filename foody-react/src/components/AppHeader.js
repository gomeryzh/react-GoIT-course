import React, { Component } from 'react';
import Logo from './Logo';
import AppNav from './AppNav';
import User from './User';

export default class AppHeader extends Component {
  state = {
    appNavList: [
      { id: 'id-1', text: 'menu' },
      { id: 'id-2', text: 'about' },
      { id: 'id-3', text: 'contacts' },
      { id: 'id-4', text: 'delivery' },
    ],
  };

  render() {
    const { appNavList } = this.state;
    return (
      <div>
        <Logo />
        <AppNav appNavList={appNavList} />
        <User name="Bob Ross" />
      </div>
    );
  }
}
