import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';


const MdTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    error={!!(touched && error)}
    label={label}
    fullWidth
    helperText={touched && error ? error : ''}
    {...input}
    {...custom}
  />
);

MdTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default MdTextField;
