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
		default:
			return state;
	}
}

export default cartReducer;