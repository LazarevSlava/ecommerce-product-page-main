import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './slices';

const store=configureStore({
    reducer:rootReducer,
})
export type RootState=ReturnType<typeof store.getState>;
export type AddDispatch=typeof store.dispatch;
export default store;