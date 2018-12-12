import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as api from '../../../../services/menu-api';

class MenuItemPage extends Component {
  state = {
    name: null,
    description: null,
    image: null,
    price: null,
    category: null,
    ingredients: null,
  };

  componentDidMount = () => {
    const { match } = this.props;
    console.log(match);

    api
      .getMenuItemById(match.params.id)
      .then(menuItem => console.log(menuItem));
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
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{description}</p>
        <p>
          <b>Price: {price}</b>
        </p>
        <p>
          <b>Category: {category}</b>
        </p>
        <p>{ingredients}</p>
      </div>
    );
  }
}

export default withRouter(MenuItemPage);
