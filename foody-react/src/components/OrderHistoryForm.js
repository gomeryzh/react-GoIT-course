import React, { Component } from 'react';

const INITIAL_STATE = {
  price: '',
  address: '',
  rating: '',
};

export default class OrderHistoryForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { price, address, rating } = this.state;
    const { onAddNewOrder } = this.props;
    return (
      <div>
        <form>
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
          <button onClick={() => onAddNewOrder(this.state)}>Push it</button>
        </form>
      </div>
    );
  }
}
