import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
