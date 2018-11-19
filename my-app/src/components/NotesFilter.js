import React from 'react';

const NotesFilter = ({ filter, onFilterChange }) => (
  <input type="text" value={filter} onChange={onFilterChange} />
);

export default NotesFilter;
