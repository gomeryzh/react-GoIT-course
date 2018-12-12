import React from 'react';

const MenuItem = ({ id, image, name, price, ingredients, description }) => (
  <div key={id}>
    <img src={image} alt="img" width="100" height="100" />
    <h4>{name}</h4>
    <span>{price}</span>
    <p>{ingredients}</p>
    <p>{description}</p>
  </div>
);

export default MenuItem;
