import { createSelector } from 'reselect';

/**
 * Direct selector to the fileSubmitionForm state domain
 */
const selectFileSubmitionFormDomain = (state) => state.get('fileSubmitionForm');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FileSubmitionForm
 */

const makeSelectFileSubmitionForm = () => createSelector(
  selectFileSubmitionFormDomain,
  (substate) => substate.toJS()
);

export default makeSelectFileSubmitionForm;
export {
  selectFileSubmitionFormDomain,
};
