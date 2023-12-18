import isValidArray from './is-valid-array.mjs';
import getFirst from './get-first.mjs';

const EMPTY_OK = true;

const toResult = (result, sample) => {
  if (isValidArray(sample, EMPTY_OK) === isValidArray(result, EMPTY_OK)) {
    return result;
  }
  return isValidArray(sample, EMPTY_OK)
    ? [result]
    : getFirst(result);
};

export default toResult;
