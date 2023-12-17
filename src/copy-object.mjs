import stringify from "./stringify.mjs";

const copyObject = item => {
  return JSON.parse(stringify(item));
};

export default copyObject;
