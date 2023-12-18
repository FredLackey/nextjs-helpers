import isValidArray from './is-valid-array.mjs';
import isObject from './is-object.mjs';
import stringify from './stringify.mjs';

const uniqueObjects = (values, strict = true) => {
  if (!isValidArray(values)) { return values; }
  const cache = [];
  const results = [];
  [].concat(values).filter(isObject).forEach(x => {

    const cacheValue = strict ? x : stringify(x);
    if (cache.includes(cacheValue)) {
      return;
    }
    cache.push(cacheValue);

    results.push(x);
  });
  return results;
};

export default uniqueObjects;
