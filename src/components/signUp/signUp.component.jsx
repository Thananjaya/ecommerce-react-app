import React, { Component } from "react";
import FormImput from "../formInput/formInput.component";
import CusotmButton from "../customButton/customButton.component";
import { auth, createUserProfileDocument } from "../../config/firebaseConfig";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I have already have an account</h2>
        <span>Sign up using your email and password</span>
      </div>
    );
  }
}

export default SignUp;
