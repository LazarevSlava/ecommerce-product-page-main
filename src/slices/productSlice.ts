import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  selectedProductId: number;
}

const initialState: ProductState = {
  selectedProductId: 1,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProductId: (state, action: PayloadAction<number>) => {
      state.selectedProductId = action.payload;
    },
  },
});

export const { setSelectedProductId } = productSlice.actions;
export default productSlice.reducer;
