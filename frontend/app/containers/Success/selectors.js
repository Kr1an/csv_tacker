import { createSelector } from 'reselect';

/**
 * Direct selector to the success state domain
 */
const selectSuccessDomain = (state) => state.get('success');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Success
 */

const makeSelectSuccess = () => createSelector(
  selectSuccessDomain,
  (substate) => substate.toJS()
);

export default makeSelectSuccess;
export {
  selectSuccessDomain,
};
