
import { fromJS } from 'immutable';
import notificationSystemReducer from '../reducer';

describe('notificationSystemReducer', () => {
  it('returns the initial state', () => {
    expect(notificationSystemReducer(undefined, {})).toEqual(fromJS({}));
  });
});
