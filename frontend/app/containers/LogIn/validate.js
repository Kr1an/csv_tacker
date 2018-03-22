const validate = (valuesImm) => {
  const values = valuesImm.toJS();
  const errors = {};
  if (!values.username) {
    errors.username = 'required';
  }
  if (!values.password) {
    errors.password = 'required';
  }
  return errors;
};

export default validate;
