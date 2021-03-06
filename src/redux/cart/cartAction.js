import cartConstants from "./cartConstant";

export const setCartDropDown = () => ({
  type: cartConstants.setCartDropDown
});

export const addItem = (item) => ({
	type: cartConstants.addItem,
	payload: item
});

export const removeItem = (item) => ({
	type: cartConstants.removeItem,
	payload: item
})

export const decreaseQauntity = (item) => ({
	type: cartConstants.decreaseQuantity,
	payload: item
})
