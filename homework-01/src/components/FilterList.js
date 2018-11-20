import React from 'react';

const FilterList = ({ filters }) => {
  <ul>
    {filters.map(filter => (
      <li>
        <span>{filter}</span>
      </li>
    ))}
  </ul>;
};

export default FilterList;
