import isValidString from "./is-valid-string.mjs";
import isNumber from "./is-number.mjs";

const isBoolean = (value, strict = true) => {
  if (strict) {
    return value === true || value === false;
  }
  if (isValidString(value)) {
    return value.toLowerCase() === "true" || value.toLowerCase() === "false";
  }
  if (isNumber(value)) {
    return value === 1 || value === 0;
  }
  return false;
};

export default isBoolean;