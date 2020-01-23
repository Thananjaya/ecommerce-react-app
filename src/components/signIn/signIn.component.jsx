import React, { Component } from "react";
import FormInput from "../formInput/formInput.component";
import "./signIn.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signin">
        <h2> I already own an account </h2>
        <span>Sign in using your email and password</span>
        <form onSubmit={this.handleChange}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <input type="submit" value="signin" />
        </form>
      </div>
    );
  }
}

export default SignIn;
