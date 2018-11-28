import React, { Component, createRef } from 'react';

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
    const { onClose } = this.props;
    return (
      <div className="Backdrop" ref={this.ModalConteinerRef}>
        <div className="ModalWindow">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus voluptate beatae est ipsum, non ad totam ut iure porro
            molestias?Backdrop
          </p>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}
