/**
 * HomePage actions
 */

import {
  LOAD_FOOD_ITEM,
  LOAD_FOOD_ITEM_SUCCESS,
  LOAD_FOOD_ITEM_ERROR,
} from './constants';

/**
 * Action creators
 */

/**
 * Load the food items, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_FOOD_ITEM
 */
export function loadFoods() {
  return { type: LOAD_FOOD_ITEM };
}

/**
 * Dispatched when the items are loaded by the request saga
 *
 * @param  {string} text The current food item
 *
 * @return {object} An action object with a type of LOAD_FOOD_ITEM_SUCCESS passing the foods
 */
export function loadFoodSuccess(text) {
  return { type: LOAD_FOOD_ITEM_SUCCESS, text };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function loadFoodsError(error) {
  return { type: LOAD_FOOD_ITEM_ERROR, error };
}
