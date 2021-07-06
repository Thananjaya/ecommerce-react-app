import React from "react";
import {ReactComponent as CartLogo} from "../../assets/cart.svg";
import { setCartDropDown } from "../../redux/cart/cartAction";
import { cartItemsCount } from "../../redux/cart/cartSelector";
import { connect } from "react-redux";

import "./cartIcon.styles.scss";


const CartIcon = ({ cartDropDown, itemCount }) => (
  <div className="cart-icon" onClick={cartDropDown}>
    <CartLogo className="shopping-icon" />
    <span className="count">{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  cartDropDown: () => dispatch(setCartDropDown())
});

const mapStateToProps = state => ({
  itemCount: cartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);