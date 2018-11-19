import React, { Component } from 'react';

export default class NoteEditor extends Component {
  state = {
    text: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddNote(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
          />
          <button>Add Note</button>
        </form>
      </div>
    );
  }
}
