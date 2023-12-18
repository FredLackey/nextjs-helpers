import isNumber from "./is-number.mjs";
import isValidString from "./is-valid-string.mjs";
import isBoolean from "./is-boolean.mjs";

const getVars = (proper = true, valid = true) => {
  const result = {};
  Object.keys(process.env)
    .filter((key) => key && (!proper || key === key.toUpperCase()))
    .filter(
      (key) =>
        key &&
        (!valid ||
          isNumber(process.env[key]) ||
          isBoolean(process.env[key]) ||
          isValidString(process.env[key]))
    )
    .sort()
    .forEach((key) => {
      result[key] = process.env[key];
    });
  return result;
};

export default getVars;
