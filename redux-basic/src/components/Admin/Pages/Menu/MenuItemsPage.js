import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import * as api from '../../../../services/menu-api';

import MenuList from './MenuList';
import CategorySelector from './CategorySelector';
import ClearFilter from './ClearFilter';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuItemsPage extends Component {
  state = {
    menuItems: [],
    categories: [],
  };

  componentDidMount = async () => {
    const categories = await api.getCategories();
    this.setState({ categories });

    const category = getCategoryFromProps(this.props);
    if (!category) {
      const menuItems = await api.getAllMenuItems();
      this.setState({ menuItems });
      return;
    }

    const itemsByCategory = await api.getMenuItemsWithCategory(category);
    this.setState({ menuItems: itemsByCategory });
  };

  componentDidUpdate = async prevProps => {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (!nextCategory) {
      const menuItems = await api.getAllMenuItems();
      this.setState({ menuItems });
      return;
    }

    if (prevCategory === nextCategory) return;

    const itemsByCategory = await api.getMenuItemsWithCategory(nextCategory);
    this.setState({ menuItems: itemsByCategory });
  };

  handleOnCategoryChange = category => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${category}`,
    });
  };

  handleGoBack = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { menuItems, categories } = this.state;
    const currentCategory = getCategoryFromProps(this.props);
    return (
      <div>
        <h1>Menu Page</h1>
        <button type="button" onClick={this.handleGoBack}>
          На главную страницу
        </button>
        <hr />
        <CategorySelector
          options={categories}
          onChange={this.handleOnCategoryChange}
          value={currentCategory}
        />
        <br />
        {currentCategory && <h2>Текущий фильтр: {currentCategory}</h2>}
        <ClearFilter />
        <hr />
        <MenuList menuItems={menuItems} />
      </div>
    );
  }
}

export default withRouter(MenuItemsPage);
