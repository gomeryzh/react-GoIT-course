import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../redux/selectors';

const withRedirect = WrappedComponent => {
  class WithRedirect extends Component {
    componentDidUpdate = (prevProps, prevState) => {
      if (this.props.isAuthenticated) {
        const { from } = this.props.location.state || {
          from: { pathname: '/' }
        };
        this.props.history.push(from);
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapState = state => ({
    isAuthenticated: isAuthenticated(state)
  });

  return connect(mapState)(WithRedirect);
};

export default withRedirect;
