import { combineReducers } from '@reduxjs/toolkit';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export default rootReducer;
