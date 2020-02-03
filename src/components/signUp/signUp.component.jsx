import React, { Component } from "react";
import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";
import { auth, createUserProfileDocument } from "../../config/firebaseConfig";
import "./signUp.styles.scss";

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

  handleSubmit = async event => {
    const { userName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Password does not match!!");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword({
        email,
        password
      });
      await createUserProfileDocument(user, userName);

      this.setState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error("Error Occured ", error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { userName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I have already have an account</h2>
        <span>Sign up using your email and password</span>
        <form className="sign-up" onSubmit={this.handleSubmit}>
          <FormInput
            name="userName"
            type="text"
            label="Name"
            value={userName}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
