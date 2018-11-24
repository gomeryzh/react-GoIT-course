import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

export default class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, phone, password } = this.state;
    return (
      <div>
        <form>
          <label>
            Name
            <input
              type="text"
              placeholder="Login"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleFormSubmit}>Sign up</button>
        </form>
      </div>
    );
  }
}
