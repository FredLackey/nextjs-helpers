import isDefined from './is-defined.mjs';

const initArray = (value) => {
  return [].concat(value).filter(isDefined);
};

export default initArray;
