import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => (
  <ul className={s.list}>
    <li>
      <NavLink exact to="/" activeClassName={s.active}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/articles" activeClassName={s.active}>
        Articles
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeClassName={s.active}>
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
