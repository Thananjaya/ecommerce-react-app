import React from "react";
import { withRouter } from "react-router-dom";
import "./menuItem.styles.scss";

// just for learning sake, I have modified the current components and also its related components
// To be done according to the project

const MenuItem = ({ title, size, imageUrl, history }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`/${title}/1`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="sub-title">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
