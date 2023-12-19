import getHeaders from "./get-headers.mjs";

const getHeader = (request, name, strict = false) => {
  const value = request.headers.get(name);
  if (value || strict) {
    return value;
  }
  const headers = getHeaders(request);
  const keys = Object.keys(headers);
  const key = keys.find(x => x.toLowerCase() === name.toLowerCase());
  return key ? headers[key] : undefined;
};

export default getHeader;