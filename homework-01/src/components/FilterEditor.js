import React, { Component } from 'react';

export default class FilterEditor extends Component {
  state = {
    filter: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddFilter(this.state.filter);
    this.setState({ filter: '' });
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name={filter}
            value={filter}
            onChange={this.handleChange}
            autoComplete="off"
          />
          <button>Add Filter</button>
        </form>
      </div>
    );
  }
}
