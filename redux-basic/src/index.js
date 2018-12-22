// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route } from 'react-router-dom';
// import App from './components/App';
// import './index.css';

// ReactDOM.render(
//   <BrowserRouter>
//     <Route component={App} />
//   </BrowserRouter>,
//   document.querySelector('#root'),
// );

import { createStore } from 'redux';

console.dir(createStore);
const reducer = (state = 0, action) => {
  console.log('From reducer', action);
  return state;
};

const store = createStore(reducer);
console.log(store.getState());
