import React, { Component } from 'react';
import queryString from 'query-string';
import * as api from '../../../../services/menu-api';
import MenuDb from '../../../../server/menu-db.json';
import MenuList from './MenuList';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

export default class MenuItems extends Component {
  state = {
    menuItems: [],
  };

  componentDidMount = () => {
    api.getAllMenuItems(MenuDb.menu).then(items => console.log(items));
    console.log(getCategoryFromProps);
    // console.log(menuItems);
    // this.setState({ menuItems });
  };

  render() {
    const { match } = this.props;
    const { menuItems } = this.state;
    return (
      <div>
        <MenuList items={menuItems} match={match} />
      </div>
    );
  }
}
