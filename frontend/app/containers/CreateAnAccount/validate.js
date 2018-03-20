const validate = (valuesImm) => {
  const values = valuesImm.toJS();
  const errors = {};
  if (values.username) {
    if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    } else if (!/^[a-z0-9_-]{0,15}$/i.test(values.username)) {
      errors.username = 'less then 15, only letters and numbers';
    }
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(values.email)) {
    errors.email = 'is not valid email';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^.{5,}$/i.test(values.password)) {
    errors.password = 'More then 5 letters long';
  }

  return errors;
};

export default validate;
