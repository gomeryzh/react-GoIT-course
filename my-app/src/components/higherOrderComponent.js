import React, { Component } from 'react';
const higherOrderComponent = WrappedComponent => {
  return class HigherOrderComponent extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
export default higherOrderComponent;
