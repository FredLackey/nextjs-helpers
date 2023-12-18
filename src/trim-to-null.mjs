import trimString from './trim-string.mjs';
import isValidString from './is-valid-string.mjs';

const EMPTY_OK = false;

const trimToNull = value => {
  value = trimString(value);
  return isValidString(value, EMPTY_OK) ? value : null;
};
export default trimToNull;
