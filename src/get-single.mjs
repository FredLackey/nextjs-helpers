import getArrayCount from './get-array-count.mjs';

const getSingle = value => {
  return getArrayCount(value) === 1
    ? value[0]
    : undefined;
};

export default getSingle;
