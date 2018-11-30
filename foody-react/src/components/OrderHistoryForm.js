import React, { Component } from 'react';

const INITIAL_STATE = {
  price: '',
  address: '',
  rating: '',
  date: Date.now(),
};

export default class OrderHistoryForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    const { handleAddNewOrder } = this.props;
    e.preventDefault();
    console.log(this.state);
    handleAddNewOrder(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { price, address, rating } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            Price
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={price}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              placeholder="address"
              name="address"
              value={address}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Rating
            <input
              type="text"
              placeholder="rating"
              name="rating"
              value={rating}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Push it</button>
        </form>
      </div>
    );
  }
}
