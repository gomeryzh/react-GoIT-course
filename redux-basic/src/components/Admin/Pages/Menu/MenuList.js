import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import s from './MenuList.module.css';

const MenuList = ({ menuItems, match, location }) => (
  <ul>
    {menuItems.map(item => (
      <li key={item.id}>
        <Link
          to={{
            pathname: `${match.url}/${item.id}`,
            state: { from: location },
          }}
        >
          <img src={item.image} alt={item.name} className={s.img} />
          <span>{item.name}</span>
          <p>
            <b>Price: {item.price}</b>
          </p>
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(MenuList);
