import { combineReducers } from 'redux';
import cartReducer from './exampleSlice';

const rootReducer = combineReducers({
    example: cartReducer,
});

export default rootReducer;
