import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const validateCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const cartItemsCount = createSelector(
	[validateCartItems],
	cartItems => 
		cartItems.reduce((accumulator, cartItem) =>
			accumulator + cartItem.quantity
			, 0)
		
)

export const cartItemsTotal = createSelector(
	[validateCartItems],
	cartItems => 
		cartItems.reduce((accumulator, cartItem) =>
			accumulator + cartItem.quantity * cartItem.price
			, 0)
)