import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ menu }) => (
  <ul>
    {' '}
    {menu.map(({ id, imgSrc, name, price, ingredients, description }) => (
      <MenuItem
        key={id}
        src={imgSrc}
        name={name}
        price={price}
        ingredients={ingredients}
        description={description}
      />
    ))}
  </ul>
);

export default MenuList;
