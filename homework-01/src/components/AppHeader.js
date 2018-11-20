import React, { Component } from 'react';
import Logo from './Logo';
import AppNav from './AppNav';
import User from './User';

const appNavList = ['menu', 'about', 'contacts', 'delivery'];

export default class AppHeader extends Component {
  render() {
    return (
      <div>
        <Logo />
        <AppNav navList={appNavList} />
        <User name={'Bob Ross'} />
      </div>
    );
  }
}
