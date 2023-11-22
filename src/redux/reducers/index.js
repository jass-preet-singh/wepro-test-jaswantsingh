import { combineReducers } from '@reduxjs/toolkit';
import favoritesReducer from './favorites';
import searchReducer from './searchSlice';
import filtersReducer from './filterSlice';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  search: searchReducer,
  filters: filtersReducer,
});

export default rootReducer;
