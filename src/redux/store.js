import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import { contactsApi } from 'services/contactsApi';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
