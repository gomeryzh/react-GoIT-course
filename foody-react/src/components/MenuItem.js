import React from 'react';

const MenuItem = ({ id, imgSrc, name, price, ingredients, description }) => (
  <li key={id}>
    <figure>
      <img src={imgSrc} alt="img" />
      <h4>{name}</h4>
      <span>{price}</span>
      <p>{ingredients}</p>
      <figcaption>
        <p>{description}</p>
      </figcaption>
    </figure>
  </li>
);

export default MenuItem;
