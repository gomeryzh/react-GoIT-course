import React, { Component } from 'react';
import * as api from '../../../../services/menu-api';
import MenuItem from './MenuItem';

export default class MenuItemPage extends Component {
  state = {
    name: null,
    description: null,
    image: null,
    price: null,
    category: null,
    ingredients: null,
  };

  componentDidMount = async () => {
    const { match } = this.props;
    const menuItem = await api.getMenuItemById(match.params.id);
    this.setState({ ...menuItem });
  };

  handleGoBack = () => {
    const { location, history } = this.props;
    const { category } = this.state;

    if (location.state) return history.push(location.state.from);

    return history.push({
      pathname: '/menu',
      search: `category=${category}`,
    });
  };

  render() {
    const {
      name,
      description,
      image,
      price,
      category,
      ingredients,
    } = this.state;
    return (
      <div>
        <MenuItem
          name={name}
          description={description}
          image={image}
          price={price}
          category={category}
          ingredients={ingredients}
        />
        <button onClick={this.handleGoBack}>back to Menu</button>
      </div>
    );
  }
}
