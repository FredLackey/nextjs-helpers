import isDate from './is-date.mjs';
import { ZERO_DATE } from './constants.mjs';

const isZeroDate = value => {
  return isDate(value) && value.getTime() === ZERO_DATE.getTime();
};

export default isZeroDate;
