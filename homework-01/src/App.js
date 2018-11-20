import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import Logo from './components/Logo';
import AppNav from './components/AppNav';
import User from './components/User';
import OrderHistory from './components/OrderHistory';

class App extends Component {
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
        <div style={{ display: 'flex' }}>
          <Logo />
          <AppNav appNavList={appNavList} />
          <User name={'Bob Ross'} />
        </div>
        <OrderHistory />
      </div>
    );
  }
}

export default App;
