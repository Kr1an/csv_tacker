/**
 *
 * NotificationSystem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Snackbar from 'material-ui/Snackbar';

import injectReducer from 'utils/injectReducer';
import makeSelectNotificationSystem from './selectors';
import reducer from './reducer';
import { reset } from './actions';

function NotificationSystem({
  notificationSystem: {
    isOpened,
    content,
  },
  dispatch,
}) {
  return (
    <Snackbar
      open={isOpened}
      message={content}
      onClick={() => dispatch(reset())}
    />
  );
}

NotificationSystem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  notificationSystem: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  notificationSystem: makeSelectNotificationSystem(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'notificationSystem', reducer });

export default compose(
  withReducer,
  withConnect,
)(NotificationSystem);
