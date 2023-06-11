const validateAuthForm = (email: string, password: string) => {
  return validateEmail(email) && validatePassword(password);

  function validateEmail(email: string) {
    return email.includes('@');
  }

  function validatePassword(password: string) {
    return password.length >= 8;
  }
};

export default validateAuthForm;
