import React from 'react';
import CustomButton from '../customButton/customButton.component';
import "./cartDropdown.styles.scss";


const CartDropDown = () => (
  <div className="cart-drop-down">
    <div className="checkout-items" />
    <CustomButton className="checkout-button">Go To Checkout</CustomButton>
  </div>
)

export default CartDropDown;