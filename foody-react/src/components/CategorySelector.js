import React from 'react';

const CategorySelector = ({ categories, category, onCategoryChange }) => (
  <select value={category} onChange={onCategoryChange}>
    {categories.map(cat => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>
);

export default CategorySelector;
