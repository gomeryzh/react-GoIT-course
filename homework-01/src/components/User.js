import React, { Component } from 'react';

export default class User extends Component {
  state = {
    userMenuIsShown: false,
  };

  onShowClick = () => {
    this.setState({
      userMenuIsShown: !this.state.userMenuIsShown,
    });
  };

  render() {
    const { name } = this.props;
    const { userMenuIsShown } = this.state;
    return (
      <div>
        <i onClick={this.onShowClick} className="userMenu-btn">
          <img src="../down-arrow.png" className="" alt={name} />
        </i>

        {userMenuIsShown ? (
          <ul className="userMenu">
            <li className="userMenu-item">Account</li>
            <li className="userMenu-item">Order History</li>
            <li className="userMenu-item">Meal Planner</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
