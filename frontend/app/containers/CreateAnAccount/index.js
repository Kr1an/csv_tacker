/**
 *
 * CreateAnAccount
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
import makeSelectCreateAnAccount from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

function CreateAnAccount() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CreateAnAccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createanaccount: makeSelectCreateAnAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'createanaccount', reducer });
const withSaga = injectSaga({ key: 'createanaccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateAnAccount);
