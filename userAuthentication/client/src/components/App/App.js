import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as operations from "../../redux/operations";
import { SignIn, SignUp } from "../../pages";
import Header from "../Header/Header";

class App extends Component {
  componentDidMount() {
    this.props.refreshCurrenUser();
  }
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

const mapDispatch = {
  refreshCurrenUser: operations.refreshCurrenUser
};

export default connect(
  null,
  mapDispatch
)(App);
