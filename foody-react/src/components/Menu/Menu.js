import React, { Component } from 'react';
import MenuList from './MenuList';
import MenuFilter from './MenuFilter';
import CategorySelector from './CategorySelector';
import OrderHistory from '../Order/OrderHistory';
import Modal from '../Modal/Modal';
import * as API from '../../services/orderHistory-api';
import menuDb from '../../server/menu-db.json';
import Loader from '../Modal/Loader/Loader';
import OrderHistoryForm from '../Order/OrderHistoryForm';

const filterMenu = (filter, menuJson) =>
  menuJson.filter(menuItem =>
    menuItem.name.toLowerCase().includes(filter.toLowerCase()),
  );

export default class Menu extends Component {
  state = {
    filter: '',
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

  handleFilterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    const { categories, menu } = menuDb;
    const {
      filter,
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
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <MenuList menu={filteredMenu} />
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
