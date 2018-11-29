import React, { Component } from 'react';
import Modal from './Modal';
import s from './Modal.module.css';

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
        <button
          type="button"
          className={s.purple}
          onClick={this.handleOpenModal}
        >
          Open Modal
        </button>
        {isModalOpen && (
          <Modal isModalOpen={isModalOpen} onClose={this.handleCloseModal} />
        )}
      </div>
    );
  }
}
