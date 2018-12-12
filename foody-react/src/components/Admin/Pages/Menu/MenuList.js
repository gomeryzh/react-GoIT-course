import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = ({ items, match }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link to={`${match.url}/${item.id}`}>{item.title}</Link>
      </li>
    ))}
  </ul>
);

export default MenuList;
