/*
 *
 * NotificationSystem reducer
 *
 */

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {
  SHOW_MESSAGE,
  RESET,
} from './constants';

const initialState = fromJS({
  isOpened: null,
  content: null,
});

const notificationSystemReducer = (state = initialState, action) => {
  const cases = {
    [SHOW_MESSAGE]: () => state
      .set('isOpened', true)
      .set('content', action.payload),
    [RESET]: () => state
      .set('isOpened', null)
      .set('content', null),
    [LOCATION_CHANGE]: () => state
      .set('isOpened', null)
      .set('content', null),
    default: () => state,
  };
  return (cases[action.type] || cases.default)();
};

export default notificationSystemReducer;
