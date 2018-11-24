import React, { Component } from 'react';

export default class User extends Component {
  state = {
    userMenuIsShown: true,
  };

  onShowClick = () => {
    const { userMenuIsShown } = this.state;
    this.setState({
      userMenuIsShown: !userMenuIsShown,
    });
  };

  render() {
    const { name } = this.props;
    const { userMenuIsShown } = this.state;
    return (
      <div>
        <i onClick={this.onShowClick} role="presentation">
          <img className="" alt={name} />
        </i>

        {userMenuIsShown ? (
          <ul className="userMenu">
            <li className="userMenu-item">
              <a href="wdefgwsw">Account</a>
            </li>
            <li className="userMenu-item">
              <a href="wdefgwsw">Order History</a>
            </li>
            <li className="userMenu-item">
              <a href="wdefgwsw">Meal Planner</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}
