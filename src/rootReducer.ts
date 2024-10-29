import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import quantityReducer from './slices/quantityCartProductSlice';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  quantity: quantityReducer,
});

export default rootReducer;
