import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setContactsFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setContactsFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
