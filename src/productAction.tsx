import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  images: { main: string; thumbnail: string }[];
}

export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { state: { auth: { token: string | null } } }
>('product/fetchProducts', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const token = state.auth.token;

  if (!token) {
    return rejectWithValue('No authentication token found');
  }

  try {
    const response = await axios.get<Product[]>(
      'http://localhost:3000/products',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return rejectWithValue('Failed to fetch products');
  }
});
