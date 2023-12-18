import hasString from './has-string.mjs';
import isValidString from './is-valid-string.mjs';
import { ALPHANUMERIC } from './constants.mjs';

const EMPTY_OK = true;

const cleanString = (value, valid = ALPHANUMERIC, invalid = '', isCaseSensitive = false) => {
  if (!isValidString(value, EMPTY_OK)) { return undefined; }
  return value.split('').filter(ch => ((!valid || hasString(valid, ch, isCaseSensitive))
    && (!invalid || !hasString(invalid, ch, isCaseSensitive))
  )).join('');
};

export default cleanString;
