import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as api from '../../../../services/menu-api';

const INITIAL_STATE = {
  id: Math.random(),
  name: 'Классический греческий салат ',
  description:
    'Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. ',
  image:
    'https://s1.eda.ru/StaticContent/Photos/120214131925/120214132229/p_O.jpg',
  price: 350,
  category: 'salad',
};

class AddMenuItem extends Component {
  state = { ...INITIAL_STATE };

  onAddnewMenuItem = async () => {
    const { history } = this.props;
    const newMenuItem = await api.postMenuItem(this.state);
    console.log(newMenuItem);
    history.push({
      pathname: '/menu',
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onAddnewMenuItem}> Add new Menu Item</button>
      </div>
    );
  }
}

export default withRouter(AddMenuItem);
