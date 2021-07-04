import cartConstants from "./cartConstant";

export const setCartDropDown = () => ({
  type: cartConstants.setCartDropDown
});

export const addItem = (item) => ({
	type: cartConstants.addItem,
	payload: item
});
