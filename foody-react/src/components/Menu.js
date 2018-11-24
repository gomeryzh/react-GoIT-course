import React, { Component } from 'react';
import MenuList from './MenuList';
import MenuFilter from './MenuFilter';
import CategorySelector from './CategorySelector';
import menu from '../menu.json';

const filterMenu = (filter, menuJson) =>
  menuJson.filter(menuItem =>
    menuItem.name.toLowerCase().includes(filter.toLowerCase()),
  );

export default class Menu extends Component {
  state = {
    filter: '',
    categories: ['fish', 'meet', 'fruits'],
    category: 'meet',
  };

  handleAddFilter = filter => {
    this.setState(prevState => ({
      categories: [{ filter }, ...prevState.categories],
    }));
    this.setState({ filter: '' });
  };

  handleFilterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { filter, categories, category } = this.state;
    const filteredMenu = filterMenu(filter, menu);
    return (
      <div>
        <CategorySelector
          categories={categories}
          category={category}
          onCategoryChange={this.handleCategoryChange}
        />
        {/* <FilterEditor text={filter} onAddFilter={this.handleAddFilter} /> */}
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        {/* <FilterList categories={categories} /> */}
        <MenuList menu={filteredMenu} />
      </div>
    );
  }
}
