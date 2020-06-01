import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addFoodContainer state domain
 */

const selectAddFoodContainerDomain = state =>
  state.addFoodContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddFoodContainer
 */

const makeSelectAddFoodContainer = () =>
  createSelector(
    selectAddFoodContainerDomain,
    substate => substate,
  );

export default makeSelectAddFoodContainer;
export { selectAddFoodContainerDomain };
