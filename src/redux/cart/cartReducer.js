import { cartConstants } from './cartConstant';

const initialState = {
	hidden: true
}

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case cartConstants.setCartDropDown:
			return {
				hidden: !state.hidden
			}
		default:
			return state;
	}
}

export default cartReducer;