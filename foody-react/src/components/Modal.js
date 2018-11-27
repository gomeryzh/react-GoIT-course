import React, { Component, createRef } from 'react';

export default class Modal extends Component {
  ModalConteinerRef = createRef();

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isModalOpen } = this.props;
    return nextState.isModalOpen !== isModalOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const { isModalOpen } = this.props;
    const { onClose } = this.props;
    const isTargetInModalConteiner = this.ModalConteinerRef.current.contains(
      e.target,
    );
    if (isModalOpen && isTargetInModalConteiner) {
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
