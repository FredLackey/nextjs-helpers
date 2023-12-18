import cleanString from './clean-string.mjs';
import { DIGITS } from './constants.mjs';

const cleanDigits = value => {
  return cleanString(value, DIGITS);
};

export default cleanDigits;
