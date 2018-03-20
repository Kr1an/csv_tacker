/**
 *
 * LogIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import { reduxForm, Field } from 'redux-form/immutable';

import CenteredContainer from 'components/CenteredContainer';
import MdTextField from 'components/MdTextField';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogIn from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import validate from './validate';

const styles = () => ({
  fieldsHolder: {
    marginBottom: 20,
  },
});

const LogIn = ({
  classes,
  goToSignUpPage,
  goToSubmitPage,
  handleSubmit,
}) => (
  <CenteredContainer>
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
        >
          Who are you?
        </Typography>
      </Toolbar>
    </AppBar>

    <Grid container item xs={10} md={6} lg={4} xl={2} justify="center">
      <form onSubmit={handleSubmit}>
        <Grid item className={classes.fieldsHolder} xs={12}>
          <Field
            name="email"
            component={MdTextField}
            label="Email"
            margin="normal"
            fullWidth
            required
          />
          <Field
            name="password"
            component={MdTextField}
            label="Password"
            margin="normal"
            fullWidth
            type="password"
            required
          />
        </Grid>
        <Grid container justify="flex-end">
          <Grid item xs={12} md={6} lg={4}>
            <Button
              variant="raised"
              color="primary"
              fullWidth
              onClick={goToSubmitPage}
            >
              Log in
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Button
              fullWidth
              mini
              onClick={goToSignUpPage}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  </CenteredContainer>
);

LogIn.propTypes = {
  classes: PropTypes.object,
  goToSignUpPage: PropTypes.func.isRequired,
  goToSubmitPage: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogIn(),
});

const mapDispatchToProps = (dispatch) => ({
  goToSignUpPage: () => dispatch(push('/register')),
  goToSubmitPage: () => dispatch(push('/submit')),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'logIn', reducer });
const withSaga = injectSaga({ key: 'logIn', saga });
const withStyle = withStyles(styles);
const withForm = reduxForm({ form: 'logInForm', validate });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle,
  withForm,
)(LogIn);
