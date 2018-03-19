/**
 *
 * FileSubmitionForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectFileSubmitionForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

function FileSubmitionForm() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

FileSubmitionForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  filesubmitionform: makeSelectFileSubmitionForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'filesubmitionform', reducer });
const withSaga = injectSaga({ key: 'filesubmitionform', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(FileSubmitionForm);
