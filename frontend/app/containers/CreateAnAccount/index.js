/**
 *
 * CreateAnAccount
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import { reduxForm, Field } from 'redux-form/immutable';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import CenteredContainer from 'components/CenteredContainer';
import MdTextField from 'components/MdTextField';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCreateAnAccount from './selectors';
import reducer from './reducer';
import saga from './saga';

import validate from './validate';

import { signUp } from './actions';

const styles = () => ({
  fieldsHolder: {
    marginBottom: 20,
  },
});

const CreateAnAccount = ({
  classes,
  goToLogInPage,
  handleSubmit,
  onSubmit,
  submitting,
  valid,
}) => (
  <CenteredContainer>
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
        >
          Create an account
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid container item xs={10} md={6} lg={4} xl={2} justify="center">
      <form onSubmit={handleSubmit((val) => onSubmit(val.toJS()))}>
        <Grid className={classes.fieldsHolder} item xs={12}>
          <Field
            name="name"
            component={MdTextField}
            label="Username"
            required
            margin="normal"
          />
          <Field
            name="email"
            component={MdTextField}
            label="Email"
            fullWidth
            margin="normal"
          />
          <Field
            name="password"
            component={MdTextField}
            label="Password"
            required
            fullWidth
            type="password"
            margin="normal"
          />
          <Field
            name="secret"
            component={MdTextField}
            label="Enter you application's ID. Could be skipped."
            fullWidth
            type="tex"
            margin="normal"
          />
        </Grid>
        <Grid container justify="flex-end">
          <Grid item xs={12} md={6} lg={4}>
            <Button
              variant="raised"
              color="primary"
              type="submit"
              fullWidth
              disabled={submitting || !valid}
            >sign up</Button>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Button
              fullWidth
              onClick={goToLogInPage}
            >log in</Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </CenteredContainer>
);

CreateAnAccount.propTypes = {
  classes: PropTypes.object.isRequired,
  goToLogInPage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  valid: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  createanaccount: makeSelectCreateAnAccount(),
});

const mapDispatchToProps = (dispatch) => ({
  goToLogInPage: () => dispatch(push('/login')),
  onSubmit: (payload) => dispatch(signUp(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'createAnAccount', reducer });
const withSaga = injectSaga({ key: 'createAnAccount', saga });
const withStyle = withStyles(styles);
const withForm = reduxForm({ form: 'createAnAccountForm', validate });

export default compose(
  withForm,
  withReducer,
  withSaga,
  withConnect,
  withStyle,
)(CreateAnAccount);
