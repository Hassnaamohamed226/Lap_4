import { createStore } from 'redux';
import favoritesReducer from './favoritesReducer';

export const store = createStore(favoritesReducer);