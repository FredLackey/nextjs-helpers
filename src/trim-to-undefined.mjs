import trimString from './trim-string.mjs';
import isValidString from './is-valid-string.mjs';

const EMPTY_OK = false;

const trimToUndefined = value => {
  value = trimString(value);
  return isValidString(value, EMPTY_OK) ? value : undefined;
};
export default trimToUndefined;
