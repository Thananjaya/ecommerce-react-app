import React, { Component } from "react";
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./config/firebaseConfig";
import setCurrentUser from './redux/user/userAction';
import Header from "./components/header/header.component.jsx";
import Signing from "./pages/signing/signing.component.jsx";
import HomePage from "./pages/homepage/homepage.components.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import "./app.css";

class App extends Component {
  unSubscribe = null;

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
        this.props.currentUser(userAuth)
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
          <Route exact component={HomePage} path="/" />
          <Route exact path="/signIn" render={() => this.props.currentUserInfo ? (<Redirect to="/" />) : (<Signing />)} />
          <Route component={ShopPage} path="/shop" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUserInfo: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  currentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
