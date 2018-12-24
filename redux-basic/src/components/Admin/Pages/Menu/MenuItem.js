import React from 'react';

const MenuItem = ({
  name,
  image,
  description,
  price,
  category,
  ingredients,
}) => (
  <div>
    <h2>{name}</h2>
    <img src={image} alt={name} width="200" heigth="200" />
    <p>{description}</p>
    <p>
      <b>Price: {price}</b>
    </p>
    <p>
      <b>Category: {category}</b>
    </p>
    <p>{ingredients}</p>
  </div>
);

export default MenuItem;
