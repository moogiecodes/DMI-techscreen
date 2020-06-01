/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

// Direct selector for home page ?
const selectHome = state => state.home || initialState;

const makeSelectFoodItems = () =>
  createSelector(
    selectHome,
    homeState => homeState.foodItems,
  );

export { selectHome, makeSelectFoodItems };