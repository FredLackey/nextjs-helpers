import isValidString from './is-valid-string.mjs';
import isObject from './is-object.mjs';
import isArray from './is-array.mjs';
import fromJson from './from-json.mjs';

const isJson = (str) => {
  if (!isValidString(str)) {
    return false;
  }
  const obj = fromJson(str);
  return isObject(obj) || isArray(obj);
};

export default isJson;
