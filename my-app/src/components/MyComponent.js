import React from 'react';
import higherOrderComponent from './higherOrderComponent';
const MyComponent = props => <div>{JSON.stringify(props, null, 2)}</div>;
export default higherOrderComponent(MyComponent);
