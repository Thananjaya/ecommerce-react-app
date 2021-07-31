import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import  userReducer  from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';

const persistConfiguration = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer
});

export default persistReducer(persistConfiguration, rootReducer);