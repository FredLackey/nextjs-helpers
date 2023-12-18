import isValidString from './is-valid-string.mjs';

const EMPTY_OK = true;

const getStringSize = (value, encoding = 'utf8') => {
  if (!isValidString(value, EMPTY_OK)) { return -1; }
  return Buffer.byteLength(value, encoding);
};

export default getStringSize;
