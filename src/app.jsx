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
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribe = () => null;

  componentDidMount(){
    this.unSubscribe = auth.onAuthStateChanged(async userData => {
      if(userData) {
        const userRef = await createUserProfileDocument(userData);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: 
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({currentUser: null})
      }
    })
  }

  // componentDidMount() {
  //   this.unSubscribe = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);
  //       userRef.onSnapshot(snapshot => {
  //         this.props.currentUser({
  //           id: snapshot.id,
  //           ...snapshot.data()
  //         })
  //       });
  //     } else {
  //       this.props.currentUser(userAuth)
  //     }
  //   });
  // }

  componentWillUnmount() {
    this.unSubscribe();
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signIn" render={() => this.props.currentUserInfo ? (<Redirect to="/" />) : (<Signing />)} />
          <Route path="/shop" component={ShopPage} />
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
