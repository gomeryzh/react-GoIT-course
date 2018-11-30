import React, { Component } from 'react';
import MenuList from './MenuList';
import MenuFilter from './MenuFilter';
import CategorySelector from './CategorySelector';
import OrderHistory from './OrderHistory';
import Modal from './Modal/Modal';
import * as API from '../services/orderHistory-api';
import menu from '../menu.json';
import Loader from './Modal/Loader/Loader';
import OrderHistoryForm from './OrderHistoryForm';

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
    isModalOpen: false,
    isLoading: false,
    orderDetails: '',
  };

  componentDidMount = () => {
    API.getOrderHistory().then(orders => {
      this.setState({ orders });
    });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleDeleteOrder = id => {
    this.setState({ isLoading: true });
    API.deleteOrder(id)
      .then(isOk => {
        if (!isOk) return;
        this.setState(state => ({
          orders: state.orders.filter(order => order.id !== id),
          isLoading: false,
        }));
      })
      .catch(error => console.log(error));
  };

  handleShowMore = id => {
    this.setState({ isLoading: true });
    API.getOrderHistoryById(id).then(item => {
      const obj = JSON.stringify(item);
      this.setState({ isModalOpen: true, orderDetails: obj, isLoading: false });
    });
  };

  handleAddNewOrder = order => {
    this.setState({ isLoading: true });

    API.addNewOrder(order).then(newOrder => {
      console.log(newOrder);
      this.setState(state => ({
        orders: [...state.orders, newOrder],
        isLoading: false,
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
    const {
      filter,
      categories,
      category,
      orders,
      isModalOpen,
      orderDetails,
      isLoading,
    } = this.state;
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
        {isLoading && <Loader />}
        <OrderHistoryForm handleAddNewOrder={this.handleAddNewOrder} />
        <OrderHistory
          history={orders}
          onShowMore={this.handleShowMore}
          onDelete={this.handleDeleteOrder}
        />
        {isModalOpen && (
          <Modal
            text={orderDetails}
            isModalOpen={isModalOpen}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}
