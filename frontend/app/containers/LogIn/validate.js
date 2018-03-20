const validate = (valuesImm) => {
  const values = valuesImm.toJS();
  const errors = {};
  if (!values.email) {
    errors.email = 'required';
  }
  if (!values.password) {
    errors.password = 'required';
  }

  return errors;
};

export default validate;
