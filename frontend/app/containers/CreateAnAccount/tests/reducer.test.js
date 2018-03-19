
import { fromJS } from 'immutable';
import createAnAccountReducer from '../reducer';

describe('createAnAccountReducer', () => {
  it('returns the initial state', () => {
    expect(createAnAccountReducer(undefined, {})).toEqual(fromJS({}));
  });
});
