import React from 'react';

const MenuFilter = ({ filter, onFilterChange }) => (
  <input type="text" value={filter} onChange={onFilterChange} />
);

export default MenuFilter;
