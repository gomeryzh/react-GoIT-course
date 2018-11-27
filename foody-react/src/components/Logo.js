import React from 'react';

const Logo = ({ img = '', width = 60, heigth = 60 }) => (
  <img href="/" src={img} alt="logo img" width={width} heigth={heigth} />
);

export default Logo;
