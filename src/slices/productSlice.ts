import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProducts } from '../productAction';

interface Product {
  id: number;
  name: string;
  price: number;
  images: { main: string; thumbnail: string }[];
}

interface ProductState {
  selectedProductId: number;
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  selectedProductId: 1,
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProductId: (state, action: PayloadAction<number>) => {
      state.selectedProductId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка при загрузке продуктов';
      });
  },
});

export const { setSelectedProductId } = productSlice.actions;
export default productSlice.reducer;
