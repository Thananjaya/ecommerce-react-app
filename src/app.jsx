import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./config/firebaseConfig";
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
    this.unSubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
        console.log(this.state);
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
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
