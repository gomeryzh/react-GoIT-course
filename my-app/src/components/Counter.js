import React, { Component } from 'react';

export default class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  handleIncrement = evt => {
    console.log('Increment button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // работает
  };
  handleDecrement = evt => {
    console.log('Decrement button was clicked!', evt); // работает
    console.log('this.props: ', this.props); // работает
  };

  render() {
    const { step } = this.props;
    return (
      <div>
        <span>0</span>
        <span>0</span>
        <button onClick={this.handleIncrement}>Increment by {step}</button>
        <button onClick={this.handleDecrement}>Decrement by {step}</button>
      </div>
    );
  }
}
