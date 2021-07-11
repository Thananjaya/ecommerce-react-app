import React from 'react';
import CustomButton from '../customButton/customButton.component';
import CartItem from "../cartItem/cartItem.component";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./cartDropdown.styles.scss";

const CartDropDown = ({cartItems}) => (
  <div className="cart-drop-down">
    <div className="checkout-items">
      {
        cartItems.length ?
        (cartItems.map(cartItem => 
          <CartItem key={cartItem.id} item={cartItem}/>
        ))
        : <span className="empty-message">Cart is empty</span>
      }
    </div>
    <CustomButton className="checkout-button">Go To Checkout</CustomButton>
  </div>
)
const mapStateToProps = state => ({
  cartItems: state.cart.cartItems 
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
