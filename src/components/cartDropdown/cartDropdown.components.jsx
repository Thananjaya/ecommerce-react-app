import React from 'react';
import CustomButton from '../customButton/customButton.component';
import CartItem from "../cartItem/cartItem.component";
import {setCartDropDown} from "../../redux/cart/cartAction";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import "./cartDropdown.styles.scss";

const CartDropDown = ({cartItems, history, dispatch}) => (
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
    <CustomButton 
      className="checkout-button"
      onClick={() => {
        history.push('/checkout');
        dispatch(setCartDropDown());
      }}
    >
      Go To Checkout
    </CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems 
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
