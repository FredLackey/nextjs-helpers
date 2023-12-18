import { ALPHANUMERIC } from './constants.mjs';
import cleanString from './clean-string.mjs';
import isGuidFormat from './is-guid-format.mjs';
import isUidFormat from './is-uid-format.mjs';

const toUidFormat = value => {
  return isUidFormat(value) || isGuidFormat(value)
    ? cleanString(value, ALPHANUMERIC).toUpperCase()
    : null;
};

export default toUidFormat;