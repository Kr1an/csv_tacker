
import { fromJS } from 'immutable';
import successReducer from '../reducer';

describe('successReducer', () => {
  it('returns the initial state', () => {
    expect(successReducer(undefined, {})).toEqual(fromJS({}));
  });
});
