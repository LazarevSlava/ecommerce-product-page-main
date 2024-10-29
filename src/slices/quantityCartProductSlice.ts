import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuantityState {
  quantityProduct: number;
}

const initialState: QuantityState = {
  quantityProduct: 0,
};

const quantityCartProductSlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    setQuantityProduct: (state, action: PayloadAction<number>) => {
      state.quantityProduct = action.payload;
    },
    decreaseQuantityProduct: (state) => {
      if (state.quantityProduct > 0) {
        state.quantityProduct -= 1;
      }
    },
  },
});

export const { setQuantityProduct, decreaseQuantityProduct } =
  quantityCartProductSlice.actions;
export default quantityCartProductSlice.reducer;
