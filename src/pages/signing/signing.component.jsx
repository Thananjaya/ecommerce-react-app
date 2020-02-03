import React from "react";
import SignIn from "../../components/signIn/signIn.component.jsx";
import SignUp from "../../components/signUp/signUp.component";
import "./signing.styles.scss";

const Signing = () => (
  <div className="signing">
    <SignIn />
    <SignUp />
  </div>
);

export default Signing;
