import React from 'react';
import { Link } from 'react-router-dom';

const AppNav = ({ isAuthenticated }) => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">about</Link>

    {isAuthenticated && (
      <>
        <Link to="/profile">profile</Link>
        <Link to="/dashboard">dashboard</Link>
      </>
    )}
  </nav>
);

export default AppNav;
