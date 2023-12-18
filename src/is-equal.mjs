import isString from './is-string.mjs';
import stringify from './stringify.mjs';

const isEqual = (value, original) => {
  return (isString(value) && isString(original))
    ? value === original
    : stringify(value) === stringify(original);
};

export default isEqual;
