import isDate from './is-date.mjs';
import isNumber from './is-number.mjs';
import isDigits from './is-digits.mjs';

const addMinutes = (value, quantity) => {
  if (!isDate(value)) {
    return undefined;
  }
  if (!isNumber(quantity) && isDigits(quantity)) {
    quantity = Number(quantity);
  }
  if (!isNumber(quantity)) {
    return undefined;
  }

  return new Date(value.getTime() + quantity * 60000);
};

export default addMinutes;
