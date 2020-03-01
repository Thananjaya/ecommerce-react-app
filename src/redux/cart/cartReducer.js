import cartConstants from './cartConstant';

const initialState = {
	hidden: true,
	cartItems: []
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case cartConstants.setCartDropDown:
			return {
				hidden: !state.hidden
			}
		case cartConstants.addItem:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload]
			}
		default:
			return state;
	}
}

export default cartReducer;