import isValidArray  from './is-valid-array.mjs';
import isNumber          from './is-number.mjs';
import isObject          from './is-object.mjs';
import isValidString from './is-valid-string.mjs';
import uniqueNumbers     from './unique-numbers.mjs';
import uniqueObjects     from './unique-objects.mjs';
import uniqueStrings     from './unique-strings.mjs';

const EMPTY_OKAY = true;

const unique = (values, params = {}) => {

  if (!isValidArray(values)) { return values; }

  const numbers = values.filter(isNumber);
  if (numbers.length > 0) {
    return uniqueNumbers(values);
  }

  const objects = values.filter(isObject);
  if (objects.length > 0) {
    return uniqueObjects(values, params.strict);
  }

  const strings = values.filter(x => (isValidString(x, EMPTY_OKAY)));
  if (strings.length > 0) {
    return uniqueStrings(values, params.isCaseSensitive, params.trim);
  }

  return null;
};

export default unique;
