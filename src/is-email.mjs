import isValidString from './is-valid-string.mjs';
import getEmail from './get-email.mjs';

const isEmail = value => {
  const email = getEmail(value);
  return isValidString(email) && value === email;
};

export default isEmail;
