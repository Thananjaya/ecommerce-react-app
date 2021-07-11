import React from 'react';
import {removeItem, addItem, decreaseQauntity} from '../../redux/cart/cartAction';
import {connect} from 'react-redux';
import "./checkoutItems.styles.scss";

const CheckOutItems=  ({cartItem, clearItem, reduceQauntity, addItem}) => {
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
				<div className="arrow" onClick={() => reduceQauntity(cartItem)}>&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
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
	clearItem: item => dispatch(removeItem(item)),
	reduceQauntity: item => dispatch(decreaseQauntity(item)),
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckOutItems);