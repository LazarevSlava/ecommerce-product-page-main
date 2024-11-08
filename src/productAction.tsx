import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  images: { main: string; thumbnail: string }[];
}

export const fetchProducts = createAsyncThunk<Product[]>(
  'product/fetchProducts',
  async () => {
    const response = await axios.get<Product[]>(
      'http://localhost:3000/products',
    );
    return response.data;
  },
);
