import React from 'react';

const Avatar = ({ img = '', width = 60, heigth = 60 }) => (
  <img href="/" src={img} alt="user avatar" width={width} heigth={heigth} />
);

export default Avatar;
