import React, { Component } from 'react';
import Modal from './Modal';

export default class HandleModal extends Component {
  state = { isModalOpen: false };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleOpenModal}>
          Open Modal
        </button>
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
