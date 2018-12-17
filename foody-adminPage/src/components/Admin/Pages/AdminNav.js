import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AdminNav.module.css';

const AdminNav = () => (
  <ul className={s.list}>
    <li className={s.listItem}>
      <NavLink to="/" activeClassName={s.active}>
        Главная
      </NavLink>
    </li>
    <li className={s.listItem}>
      <NavLink to="/menu" activeClassName={s.active}>
        Меню
      </NavLink>
    </li>
    <li>
      <NavLink to="/menu/add" activeClassName={s.active}>
        Добавить новое блюдо
      </NavLink>
    </li>
  </ul>
);

export default AdminNav;
