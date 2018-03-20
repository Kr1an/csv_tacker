import { createSelector } from 'reselect';


const selectFileSubmitionFormDomain = (state) => state.get('fileSubmitionForm');

const makeSelectFileSubmitionMeta = () => createSelector(
  selectFileSubmitionFormDomain,
  (substate) => substate.get('meta').toJS(),
);

const makeSelectFileSubmitionData = () => createSelector(
  selectFileSubmitionFormDomain,
  (substate) => substate.get('data').toJS(),
);

export {
  selectFileSubmitionFormDomain,
  makeSelectFileSubmitionData,
  makeSelectFileSubmitionMeta,
};
