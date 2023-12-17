import isValidString from "./is-valid-string.mjs";
import isObject from "./is-object.mjs";
import isNumber from "./is-number.mjs";
import isDefined from "./is-defined.mjs";
import copyObject from "./copy-object.mjs";

const KEYS = ['id', '_id'];

const getId = (itemOrId) => {

  if (!isDefined(itemOrId)) {
    return undefined;
  } 

  if (isNumber(itemOrId) || isValidString(itemOrId)) {
    return itemOrId;
  }

  if (!isObject(itemOrId)) {
    return undefined;
  }

  const copy = copyObject(itemOrId);

  const key = KEYS.find(x => (
    x && (isNumber(copy[x]) || isValidString(copy[x]))
  ));

  return key
    ? copy[key]
    : undefined;
};

export default getId;
