import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    Add_Remove_Favorite: (state, action) => {
      const restaurantId = action.payload;
      if (state.includes(restaurantId)) {
        return state.filter((id) => id !== restaurantId);
      } else {
        return [...state, restaurantId];
      }
    },
  },
});

export const { Add_Remove_Favorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
