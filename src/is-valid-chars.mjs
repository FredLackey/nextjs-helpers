import { ALPHANUMERIC } from './constants.mjs';
import isValidString from './is-valid-string.mjs';
import cleanString from './clean-string.mjs';

const EMPTY_OK = false;

const isValidChars = (value, valid = ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  return isValidString(value, EMPTY_OK)
    && (value === cleanString(value, valid, invalid, isCaseSensitive));
};

export default isValidChars;
