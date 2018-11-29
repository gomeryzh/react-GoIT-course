import React, { Component, createRef } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  ModalConteinerRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keydown', this.handleKeyPress);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen } = this.props;
    return nextState.isModalOpen !== isModalOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleWindowClick = e => {
    const { isModalOpen, onClose } = this.props;
    const targetIsBackdrop = e.target === this.ModalConteinerRef.current;

    if (isModalOpen && targetIsBackdrop) {
      onClose();
    }
  };

  handleKeyPress = e => {
    const { isModalOpen, onClose } = this.props;
    if (isModalOpen && e.key === 'Escape') {
      onClose();
    }
  };

  render() {
    const {
      onClose,
      text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quidem in ipsa aperiam quasi sint nulla assumenda quia consequatur eaque.',
    } = this.props;
    return (
      <div className={s.Backdrop} ref={this.ModalConteinerRef}>
        <div className={s.ModalWindow}>
          <p>{text}</p>
          <button type="button" className={s.blue} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
