import React, { Component } from "react";
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./config/firebaseConfig";
import setCurrentUser from './redux/user/userAction';
import Header from "./components/header/header.component.jsx";
import Signing from "./pages/signing/signing.component.jsx";
import HomePage from "./pages/homepage/homepage.components.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import CheckoutPage from "./pages/checkout/checkout.component.jsx";
import "./app.css";

class App extends Component {

  unsubscribe = () => null;

  componentDidMount() {
    this.unSubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.currentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        });
      } else {
        this.props.currentUser(null)
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signIn" render={() => this.props.user ? (<Redirect to="/" />) : (<Signing />)} />
          <Route exact path="/shop" component={ShopPage} />
          <Route excat path="/checkout" component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

// it is used for connecting action 
// which inturn used for updating the store
const mapDispatchToProps = dispatch => ({
  currentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = state => ({
  user: state.user.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
