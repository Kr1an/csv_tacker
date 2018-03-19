
import { fromJS } from 'immutable';
import fileSubmitionFormReducer from '../reducer';

describe('fileSubmitionFormReducer', () => {
  it('returns the initial state', () => {
    expect(fileSubmitionFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
