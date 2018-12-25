const getItems = state => state.notes.items;
const getFilter = state => state.notes.filter;

const filteredNotes = state => {
  const items = getItems(state);
  const filter = getFilter(state);

  return items.filter(item => item.text.toLowerCase().includes(filter));
};

export { getItems, getFilter, filteredNotes };
