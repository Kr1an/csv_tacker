import { createSelector } from 'reselect';

/**
 * Direct selector to the notificationSystem state domain
 */
const selectNotificationSystemDomain = (state) => state.get('notificationSystem');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NotificationSystem
 */

const makeSelectNotificationSystem = () => createSelector(
  selectNotificationSystemDomain,
  (substate) => substate.toJS()
);

export default makeSelectNotificationSystem;
export {
  selectNotificationSystemDomain,
};
