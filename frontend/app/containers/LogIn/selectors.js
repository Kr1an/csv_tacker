import { createSelector } from 'reselect';

/**
 * Direct selector to the logIn state domain
 */
const selectLogInDomain = (state) => state.get('logIn');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LogIn
 */

const makeSelectLogIn = () => createSelector(
  selectLogInDomain,
  (substate) => substate.toJS()
);

export default makeSelectLogIn;
export {
  selectLogInDomain,
};
