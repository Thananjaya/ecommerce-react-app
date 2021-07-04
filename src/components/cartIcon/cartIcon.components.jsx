import React from "react";
import {ReactComponent as CartLogo} from "../../assets/cart.svg";
import { setCartDropDown } from "../../redux/cart/cartAction";
import { connect } from "react-redux";
import "./cartIcon.styles.scss";


const CartIcon = ({ cartDropDown }) => (
  <div className="cart-icon" onClick={cartDropDown}>
    <CartLogo className="shopping-icon" />
    <span className="count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  cartDropDown: () => dispatch(setCartDropDown())
})

export default connect(null, mapDispatchToProps)(CartIcon);