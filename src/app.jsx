import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./config/firebaseConfig";
import Header from "./components/header/header.component.jsx";
import Signing from "./pages/signing/signing.component.jsx";
import HomePage from "./pages/homepage/homepage.components.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unSubscribe = null;

  componentDidMount() {
    this.unSubscribe = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact component={HomePage} path="/" />
          <Route component={Signing} path="/signin" />
          <Route component={ShopPage} path="/shop" />
        </Switch>
      </div>
    );
  }
}
export default App;
