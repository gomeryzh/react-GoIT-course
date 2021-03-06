import React from 'react';
import Logo from './Logo';
import AppNav from '../Navigation/AppNav';
import User from './UserMenu/User';
import LogoImg from './UserMenu/logo.jpg';
import avatar from './UserMenu/avatar.png';

const appNavList = [
  { id: 'id-1', text: 'menu' },
  { id: 'id-2', text: 'about' },
  { id: 'id-3', text: 'contacts' },
  { id: 'id-4', text: 'delivery' },
];

const AppHeader = () => (
  <header className="Header">
    <div className="Header__logo">
      <Logo img={LogoImg} width={100} heigth={100} />
    </div>
    <div className="Header__usermenu">
      <AppNav appNavList={appNavList} />
    </div>
    <div>
      <User avatar={avatar} name="Bob Ross" />
    </div>
  </header>
);

export default AppHeader;
