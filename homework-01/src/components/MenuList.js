import React from 'react';

const MenuList = ({ dishes }) => (
  <ul>
    {' '}
    {dishes.map(({ imgSrc, name, price, rating, description }) => (
      <li>
        <figure>
          <img src={imgSrc} />
          <h4>{name}</h4>
          <span>{price}</span>
          <span>{rating}</span>
          <figcaption>
            <p>{description}</p>
          </figcaption>
        </figure>
      </li>
    ))}
  </ul>
);

export default MenuList;
