import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ClearFilter extends Component {
  handleClearFilter = () => {
    const { history } = this.props;
    history.push('/menu');
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClearFilter}>
          Очистить фильтр
        </button>
      </div>
    );
  }
}

export default withRouter(ClearFilter);
