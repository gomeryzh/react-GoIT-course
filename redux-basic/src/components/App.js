import React, { Component } from 'react';
import Counter from './Counter';
import StepSelector from './StepSelector';

export default class App extends Component {
  render() {
    return (
      <div>
        <StepSelector />
        <Counter />
      </div>
    );
  }
}
