import React from "react";
import {ReactComponent as CartLogo} from "../../assets/cart.svg";
import { connect } from "react-redux";
import "./cartIcon.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <CartLogo className="shopping-icon" />
    <span className="count">0</span>
  </div> 
)

export default CartIcon;