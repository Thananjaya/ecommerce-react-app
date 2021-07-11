import cartConstants from './cartConstant';
import {addItemToCart, decreaseQuantityFromCart} from './cartUtils';

const initialState = {
	hidden: true,
	cartItems: []
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case cartConstants.setCartDropDown:
			return {
				...state,
				hidden: !state.hidden
			}
		case cartConstants.addItem:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}
		case cartConstants.removeItem:
			return{
				...state,
				cartItems: state.cartItems.filter(
					cartItem => cartItem.id !== action.payload.id
				)
			}
			case cartConstants.decreaseQauntity:
				return{
					...state,
					cartItems: decreaseQuantityFromCart(state.cartIems, action.payload)
				}
		default:
			return state;
	}
}

export default cartReducer;