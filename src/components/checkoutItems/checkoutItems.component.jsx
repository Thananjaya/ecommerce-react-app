import React from 'react';
import "./checkoutItems.styles.scss";

const CheckOutItems=  ({cartItem: {name, imageUrl, price, quantity} }) => (
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
		<div className="remove-button">
			&#10007;
		</div>
	</div>
)

export default CheckOutItems;