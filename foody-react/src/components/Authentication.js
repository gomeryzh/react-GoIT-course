import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

export default class Authentication extends Component {
  state = {};

  render() {
    return (
      <div>
        <SignUpForm />
        <SignInForm />
      </div>
    );
  }
}
