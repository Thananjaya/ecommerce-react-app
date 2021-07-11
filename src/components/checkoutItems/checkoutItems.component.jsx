import React from 'react';
import {removeItem} from '../../redux/cart/cartAction';
import {connect} from 'react-redux';
import "./checkoutItems.styles.scss";

const CheckOutItems=  ({cartItem, clearItem}) => {
	const {name, quantity, imageUrl, price} = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="product-item"/>
			</div>
			<span className="name">
				{name}
			</span>
			<span className="quantity">
				{quantity}
			</span>
			<span className="price">
				{price}
			</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10007;
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItems);