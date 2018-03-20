/**
 *
 * FileSubmitionForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';

import CenteredContainer from 'components/CenteredContainer';

import readFileWithPromise from 'utils/readFileWithPromise';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectFileSubmitionData,
  makeSelectFileSubmitionMeta,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  fileSubmit,
  fileUpload,
  fileUploadError,
  fileUploadSuccess,
  reset,
} from './actions';

const styles = () => ({
  fieldsHolder: {
    marginBottom: 20,
  },
  description: {
    marginBottom: 20,
  },
});

function FileSubmitionForm({
  classes,
  onFileUpload,
  data: { uploadedText, isTextValid },
  meta: { error, loading },
  resetUploadedFile,
  onSendFileClick,
}) {
  const activeStep = [
    !uploadedText,
    !!(uploadedText && error),
    !!(uploadedText && isTextValid),
    !!(uploadedText && isTextValid && loading),
  ].indexOf(true);
  return (
    <CenteredContainer>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="title"
            color="inherit"
          >
            Submit Form
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container item xs={10} md={6} lg={4} xl={2} justify="center">
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel>Select File</StepLabel>
            <StepContent>
              <Typography className={classes.description}>Choose file that contains information that will be submitted.</Typography>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button
                    variant="raised"
                    color="primary"
                    type="file"
                    fullWidth
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                  >
                    load file
                    <input
                      type="file"
                      style={{
                        opacity: 0,
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '100%',
                        cursor: 'pointer',
                      }}
                      onChange={onFileUpload}
                    />
                  </Button>
                </Grid>
              </Grid>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>File Validated</StepLabel>
            <StepContent>
              <Typography className={classes.description}><strong>Text is not valid:</strong><br />{(uploadedText || '').slice(0, 100)}...</Typography>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button
                    variant="raised"
                    color="primary"
                    type="file"
                    onClick={resetUploadedFile}
                  >
                    reset
                  </Button>
                </Grid>
              </Grid>
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Submit Data</StepLabel>
            <StepContent>
              <Typography className={classes.description}><strong>Valid text:</strong><br />{(uploadedText || '').slice(0, 100)}...</Typography>
              <Grid container justify="flex-end">
                <Grid item>
                  <Button
                    onClick={resetUploadedFile}
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="raised"
                    color="primary"
                    onClick={onSendFileClick}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </StepContent>
          </Step>
        </Stepper>
      </Grid>
    </CenteredContainer>
  );
}

FileSubmitionForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onFileUpload: PropTypes.func.isRequired,
  meta: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  resetUploadedFile: PropTypes.func.isRequired,
  onSendFileClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectFileSubmitionData(),
  meta: makeSelectFileSubmitionMeta(),
});

const mapDispatchToProps = (dispatch) => ({
  onSendFileClick: () => dispatch(fileSubmit()),
  resetUploadedFile: () => dispatch(reset()),
  onFileUpload: async (event) => {
    try {
      dispatch(fileUpload());
      const files = event.target.files;
      const file = files && files[0];
      if (!file) {
        return;
      }
      const fileContent = await readFileWithPromise(file);
      const textContent = fileContent.target.result;
      dispatch(fileUploadSuccess(textContent));
    } catch (error) {
      dispatch(fileUploadError(error.message));
    }
  },
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'fileSubmitionForm', reducer });
const withSaga = injectSaga({ key: 'fileSubmitionForm', saga });
const withStyle = withStyles(styles);

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyle,
)(FileSubmitionForm);
