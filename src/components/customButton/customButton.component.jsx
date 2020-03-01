import React from "react";
import "./customButton.styles.scss";

const CustomButton = ({ children, inverted, googleSignIn, ...otherButtonProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${googleSignIn ? "google-signin" : ""} custom-button`}
    {...otherButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
