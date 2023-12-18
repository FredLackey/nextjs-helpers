import isNumber from './is-number.mjs';
import isDigits from './is-digits.mjs';

const fromEpoch = (value) => {
  if (!isNumber(value) || !isDigits(`${value}`)) {
    return null;
  }
  const ms = Number(value) * 1000;
  const date = new Date(ms);
  return date;
};

export default fromEpoch;
