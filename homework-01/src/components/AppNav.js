import React from 'react';

const AppNav = ({ appNavList }) => (
  <ul>
    {appNavList.map(({ id, text }) => (
      <li key={id}>
        <a>{text}</a>
      </li>
    ))}
  </ul>
);

export default AppNav;
