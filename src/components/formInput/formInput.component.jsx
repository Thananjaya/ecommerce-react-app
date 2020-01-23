import React from "react";
import "./formInput.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const shrink = otherProps.value.length ? "shrink" : "";
  return (
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${shrink} form-input-label`}>{label}</label>
      ) : null}
    </div>
  );
};

export default FormInput;
