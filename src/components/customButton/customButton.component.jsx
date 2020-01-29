import React from "react";
import "./customButton.styles.scss";

const CustomButton = ({ children, googleSignIn, ...otherButtonProps }) => (
  <button
    className={`${googleSignIn ? "google-signin" : ""} custom-button`}
    {...otherButtonProps}
  >
    {children}
  </button>
);

export default CustomButton;
