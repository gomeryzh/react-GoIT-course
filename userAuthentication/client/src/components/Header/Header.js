import React from 'react';
import { connect } from 'react-redux';
import * as selectors from '../../redux/selectors';
import { signOut } from '../../redux/operations';
import UserProfile from '../UserProfile/UserProfile';
import AuthNav from '../AuthNav/AuthNav';
import classes from './Header.module.css';

const Header = ({ isAuthenticated, user, onSignOut }) => (
  <header className={classes.header}>
    {isAuthenticated ? (
      <UserProfile onSignOut={onSignOut} user={user} />
    ) : (
      <AuthNav />
    )}
  </header>
);

const mapState = state => ({
  isAuthenticated: selectors.isAuthenticated(state),
  user: selectors.getUser(state)
});

const mapDispatch = {
  onSignOut: signOut
};

export default connect(
  mapState,
  mapDispatch
)(Header);
