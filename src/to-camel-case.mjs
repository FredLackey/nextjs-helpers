import toSnakeCase from './to-snake-case.mjs';

const toCamelCase = value => {
  value = toSnakeCase(value);
  value = value.split('_').map(x => (x.length === 1
    ? x.toUpperCase()
    : `${x.substr(0, 1).toUpperCase()}${x.substr(1)}`)).join('');
  return value.length === 1
    ? value.toLowerCase()
    : `${value.substr(0, 1).toLowerCase()}${value.substr(1)}`;
};

export default toCamelCase;