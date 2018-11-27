import React from 'react';

const UserMenuDropdown = () => (
  <div className="Dropdown">
    <ul className="userMenu">
      <li className="userMenu-item">
        <a href="/">Account</a>
      </li>
      <li className="userMenu-item">
        <a href="/">Order History</a>
      </li>
      <li className="userMenu-item">
        <a href="/">Meal Planner</a>
      </li>
    </ul>
    <button type="button">Logout</button>
  </div>
);

export default UserMenuDropdown;
