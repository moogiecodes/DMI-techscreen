/**
 * ListContainer reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 */

import produce from 'immer';
import {
  LOAD_FOOD_ITEM,
  LOAD_FOOD_ITEM_SUCCESS,
  LOAD_FOOD_ITEM_ERROR,
} from './constants';

export const initialState = {
  foodItems: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const listContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_FOOD_ITEM:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_FOOD_ITEM_SUCCESS:
        draft.foodItems = action.text;
        draft.loading = false;
        draft.error = false;
        break;

      case LOAD_FOOD_ITEM_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default listContainerReducer;
