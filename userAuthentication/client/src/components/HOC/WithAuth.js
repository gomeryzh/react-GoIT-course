import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../redux/selectors';

const withAuth = WrappedComponent => {
  class WithAuth extends Component {
    componentDidMount = () => {
      this.checkAuth();
    };

    componentDidUpdate = (prevProps, prevState) => {
      if (this.props.isAuthenticated !== prevProps.isAuthenticated) {
        this.checkAuth();
      }
    };

    checkAuth = () => {
      if (!this.props.isAuthenticated) {
        this.props.history.push('/signin');
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapState = state => ({
    isAuthenticated: isAuthenticated(state)
  });

  return connect(mapState)(WithAuth);
};

export default withAuth;
