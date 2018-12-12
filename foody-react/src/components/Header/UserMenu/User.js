import React, { Component, createRef } from 'react';
import UserMenuDropdown from './UserMenuDropdown';
import Avatar from './Avatar';

export default class User extends Component {
  conteinerRef = createRef();

  state = {
    isDropdownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;
    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const { isDropdownOpen } = this.state;
    const IsTargetInConteiner = this.conteinerRef.current.contains(e.target);
    if (isDropdownOpen && !IsTargetInConteiner) {
      this.closeDropdown();
    }
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  render() {
    const { avatar, name } = this.props;
    const { isDropdownOpen } = this.state;
    return (
      <div
        onClick={this.openDropdown}
        className="UserMenu"
        ref={this.conteinerRef}
      >
        <Avatar img={avatar} className="Avatar" />
        <span className="UserName">{name}</span>
        {isDropdownOpen && <UserMenuDropdown />}
      </div>
    );
  }
}
