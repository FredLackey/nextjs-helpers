import isAlphaNumeric from './is-alphanumeric.mjs';

const isUidFormat = value => {
  return isAlphaNumeric(value) && value.length === 32;
};

export default isUidFormat;