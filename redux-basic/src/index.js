import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
// import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  // <BrowserRouter>
  // <Route component={App} />
  // </BrowserRouter>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
