import React, { Component } from 'react';
import FilterEditor from './FilterEditor';
import FilterList from './FilterList';
import MenuList from './MenuList';
import MenuFilter from './MenuFilter';

const filterDishes = (filter, dishes) => {
  return dishes.filter(dish =>
    dish.text.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class Menu extends Component {
  state = {
    dishes: [
      { id: 'id-1', text: 'JS' },
      { id: 'id-2', text: 'React' },
      { id: 'id-3', text: 'React Router' },
      { id: 'id-4', text: 'Redux' },
    ],
    filter: '',
    filters: ['fish', 'meet', 'drinks'],
  };

  handleAddFilter = filter => {
    this.setState(prevState => ({
      filters: [filter, ...prevState.filters],
    }));
  };

  handleFilterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  render() {
    const { dishes, filter } = this.state;
    const filteredDishes = filterDishes(dishes, filter);
    return (
      <div>
        <FilterEditor onAddFilter={this.handleAddFilter} />
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <FilterList filters={filters} />
        <MenuList dishes={filteredDishes} />
      </div>
    );
  }
}
