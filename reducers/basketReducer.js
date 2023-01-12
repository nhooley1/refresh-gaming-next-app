import { dummyData } from './productsdummydata';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: dummyData,
  totalPrice: 0,
  shippingCost: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // add product to the products array and update the total price
      state.products.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeProduct: (state, action) => {
      // remove product from the products array and update the total price
      const updatedProducts = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = updatedProducts;
      state.totalPrice -= action.payload.price;
    },
    updateShipping: (state, action) => {
      // update the shipping cost
      state.shippingCost = action.payload;
    },
  },
});

export const { addProduct, removeProduct, updateShipping } =
  basketSlice.actions;

export default basketSlice.reducer;
