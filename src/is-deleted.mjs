import isObject from "./is-object.mjs";
import isFunction from "./is-function.mjs";

const isDeleted = (item, fn) => {
  if (!isFunction) { throw new Error('isDeleted fn is not a function!'); }
  if (!isObject) { return false; }
  return fn(item);
};

export default isDeleted;
