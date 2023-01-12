import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer: basketSlice });

export default store;
