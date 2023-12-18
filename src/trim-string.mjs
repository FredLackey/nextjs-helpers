import isValidString from './is-valid-string.mjs';

const EMPTY_OK = true;

const trimString = value => {
  return isValidString(value, EMPTY_OK)
    ? value.trim()
    : '';
};
export default trimString;
