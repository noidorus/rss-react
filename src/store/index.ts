import { configureStore } from '@reduxjs/toolkit';
import search from '../components/searchPanel/searchPanelSlice';
import { apiSlice } from '../api/apiSlice';
import forms from '../components/formCards/formCardsSlice';

const reducers = { search, forms, [apiSlice.reducerPath]: apiSlice.reducer };

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
