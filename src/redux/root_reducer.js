// all reducers fall - in !!!
import { combineReducers } from 'redux';

import userReducer from './user/user_reducer';
import cartReducer from  './cart/cart.reducer';



export default combineReducers({
    user: userReducer,
    cart: cartReducer
})

