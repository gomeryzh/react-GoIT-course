import React, { Component } from 'react';
import MenuList from './MenuList';
import MenuFilter from './MenuFilter';
import CategorySelector from './CategorySelector';
import OrderHistory from './OrderHistory';
import * as API from '../services/orderHistory-api';
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
    orders: [],
  };

  componentDidMount = () => {
    API.getOrderHistory().then(orders => {
      this.setState({ orders });
    });
  };

  handleDeleteOrder = id => {
    API.deleteOrder(id)
      .then(isOk => {
        if (!isOk) return;
        this.setState(state => ({
          orders: state.orders.filter(order => order.id !== id),
        }));
      })
      .catch(error => console.log(error));

    // API.deleteOrder(id).then(isOk => {
    //   if (!isOk) return;
    //   this.setState(({ orders }) => {
    //     orders.filter(order => order.id !== id);
    //   });
    // });
  };

  handleShowMore = id => {
    API.getOrderHistoryById(id).then(item => {
      console.log(item);
    });
  };

  handleAddNewOrder = () => {
    const order = {
      date: Math.random(),
      price: Math.random(),
      address: '108 Quinn Plains',
      rating: 10,
    };

    API.addNewOrder(order).then(newOrder => {
      this.setState(state => ({
        orders: [...state.orders, newOrder],
      }));
    });
  };

  // handleAddFilter = filter => {
  //   this.setState(prevState => ({
  //     categories: [{ filter }, ...prevState.categories],
  //   }));
  //   this.setState({ filter: '' });
  // };

  handleFilterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { filter, categories, category, orders } = this.state;
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
        <button type="button" onClick={this.handleAddNewOrder}>
          Add Order
        </button>
        <OrderHistory
          history={orders}
          onShowMore={this.handleShowMore}
          onDelete={this.handleDeleteOrder}
        />
      </div>
    );
  }
}
