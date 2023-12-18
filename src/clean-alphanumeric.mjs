import cleanString from './clean-string.mjs';
import { ALPHANUMERIC } from './constants.mjs';

const cleanAlphanumeric = value => {
  return cleanString(value, ALPHANUMERIC);
};

export default cleanAlphanumeric;
