import React from 'react';

const CategorySelector = ({ categories, category, onCategoryChange }) => (
  <select value={category} onChange={onCategoryChange}>
    {categories.map(cat => (
      <option key={cat.name} value={cat.name}>
        {cat.name}
      </option>
    ))}
  </select>
);

export default CategorySelector;
