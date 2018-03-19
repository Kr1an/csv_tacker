import { createSelector } from 'reselect';

/**
 * Direct selector to the createAnAccount state domain
 */
const selectCreateAnAccountDomain = (state) => state.get('createAnAccount');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CreateAnAccount
 */

const makeSelectCreateAnAccount = () => createSelector(
  selectCreateAnAccountDomain,
  (substate) => substate.toJS()
);

export default makeSelectCreateAnAccount;
export {
  selectCreateAnAccountDomain,
};
