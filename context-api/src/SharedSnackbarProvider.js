import React, { Component } from 'react';
import SharedSnackbar from './SharedSnackbar';

const SharedSnackbarContext = React.createContext();

export class SharedSnackbarProvider extends Component {
  state = {
    isOpen: false,
    message: ''
  };

  openSnackbar = message => {
    this.setState({ isOpen: true, message });
  };

  closeSnackbar = () => {
    this.setState({ isOpen: false, message: '' });
  };
  render() {
    const { children } = this.props;
    return (
      <SharedSnackbarContext.Provider
        value={{
          snackbarIsOpen: this.state.isOpen,
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          message: this.state.message
        }}
      >
        <SharedSnackbar />
        {children}
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;
