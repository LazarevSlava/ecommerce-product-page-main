import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import quantityReducer from './slices/quantityCartProductSlice';
import authReducer from './slices/authSlice';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  quantity: quantityReducer,
  auth: authReducer,
});

export default rootReducer;
