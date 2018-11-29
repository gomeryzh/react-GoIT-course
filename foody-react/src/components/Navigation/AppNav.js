import React from 'react';
import s from './Navigation.module.css';

const AppNav = ({ appNavList }) => (
  <ul className={s.list}>
    {appNavList.map(({ id, text }) => (
      <li key={id} className={s.listItem}>
        <a href="/" className={s.link}>
          {text}
        </a>
      </li>
    ))}
  </ul>
);

export default AppNav;
