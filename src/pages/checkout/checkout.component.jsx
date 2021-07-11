import React from 'react';
import CheckOutItems from '../../components/checkoutItems/checkoutItems.component';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {validateCartItems, cartItemsTotal} from "../../redux/cart/cartSelector" 
import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => {
	return(
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>
			{
				cartItems.map(cartItem => 
					<CheckOutItems cartItem={cartItem} />
				)
			}
			<div className="total">Total Price: {total}</div>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: validateCartItems,
	total: cartItemsTotal
})

export default connect(mapStateToProps, null)(CheckoutPage);