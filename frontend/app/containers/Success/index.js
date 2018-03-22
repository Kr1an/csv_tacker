import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSuccess from './selectors';
import reducer from './reducer';
import saga from './saga';

const styles = () => ({
  root: {
    minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageHolder: {
    marginBottom: 30,
  },
  title: {
    flex: 1,
  },
});

function Success({
  classes,
  goToSubmitPage,
  onLogOutClick,
}) {
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
            className={classes.title}
          >
            Success
          </Typography>
          <Button
            color="inherit"
            onClick={onLogOutClick}
          >LOGOUT</Button>
        </Toolbar>
      </AppBar>
      <Grid item xs={12} className={classes.messageHolder}>
        <Typography
          variant="display1"
          gutterBottom
        >
          File Uploaded!
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          color="primary"
          variant="raised"
          onClick={goToSubmitPage}
        >Upload One More</Button>
      </Grid>
    </div>
  );
}

Success.propTypes = {
  classes: PropTypes.object.isRequired,
  goToSubmitPage: PropTypes.func.isRequired,
  onLogOutClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  success: makeSelectSuccess(),
});

const mapDispatchToProps = (dispatch) => ({
  goToSubmitPage: () => dispatch(push('/submit')),
  onLogOutClick: () => {
    localStorage.removeItem('token');
    dispatch(push('/login'));
  },
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'success', reducer });
const withSaga = injectSaga({ key: 'success', saga });
const withStyle = withStyles(styles);

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle,
)(Success);
