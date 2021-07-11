// utility function allow us to keep our files clean

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
	if(existingItem) {
		return cartItems.map(cartItem => 
			cartItem.id === cartItemToAdd.id ? 
				{...cartItem, quantity: cartItem.quantity + 1} : cartItem
		);
	}
	
	return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const decreaseQuantityFromCart = (cartItems, itemToRemove) => {
	const existingItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id);
	if(existingItem) { 
		if(itemToRemove.quantity === 1){
			return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
		};

		const updatedCartItems = cartItems.map(cartItem =>
			cartItem.id === itemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem
		);

		return updatedCartItems;
	};
}