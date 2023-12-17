const isAsync = value => (
  typeof value === 'function' && 
  value.constructor.name === 'AsyncFunction'
);

export default isAsync;
