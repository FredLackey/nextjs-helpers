import isDate from './is-date.mjs';
import isNumber from './is-number.mjs';

const addMinutes = (value, quantity) => {
  return (isDate(value) && isNumber(quantity))
    ? new Date(value.getTime() + quantity * 60000)
    : undefined;
};

export default addMinutes;
