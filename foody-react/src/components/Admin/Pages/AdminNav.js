import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AdminNav.module.css';

const AdminNav = () => (
  <ul className={s.list}>
    <li className={s.listItem}>
      <NavLink to="/mainAdminPage" activeClassName={s.active}>
        Главная
      </NavLink>
    </li>
    <li>
      <NavLink to="/menu" activeClassName={s.active}>
        Меню
      </NavLink>
    </li>
  </ul>
);

export default AdminNav;
