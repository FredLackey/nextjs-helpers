import isValidArray from "./is-valid-array.mjs";

const EMPTY_OK = true;

const getArrayCount = value => {
  return isValidArray(value, EMPTY_OK)
    ? value.length
    : -1;
};

export default getArrayCount;
