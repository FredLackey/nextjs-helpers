const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

export default isNumber;
