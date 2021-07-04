import React from 'react';
import CustomButton from '../customButton/customButton.component';
import CartItem from "../cartItem/cartItem.component";
import { connect } from 'react-redux';
import "./cartDropdown.styles.scss";

const CartDropDown = ({cartItems}) => (
  <div className="cart-drop-down">
    <div className="checkout-items">
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
      }
    </div>
    <CustomButton className="checkout-button">Go To Checkout</CustomButton>
  </div>
)
const mapStateToProps = state => ({
 cartItems: state.cart.cartItems 
})

export default connect(mapStateToProps)(CartDropDown);