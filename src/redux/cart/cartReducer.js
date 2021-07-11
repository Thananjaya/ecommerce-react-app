import cartConstants from './cartConstant';
import {addItemToCart} from './cartUtils';

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
		default:
			return state;
	}
}

export default cartReducer;