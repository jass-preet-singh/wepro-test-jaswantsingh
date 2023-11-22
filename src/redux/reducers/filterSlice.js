// filtersSlice.js

import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    sortOrder: 'asc',
    maxRating: null,
  },
  reducers: {
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
    setMaxRating: (state, action) => {
      state.maxRating = action.payload;
    },
  },
});

export const {
  setSortOrder,
  setMaxRating,
} = filtersSlice.actions;

export default filtersSlice.reducer;
