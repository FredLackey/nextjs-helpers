const getHeader = (request, name) => {
  const value = request.headers.get(name);
  return value;
};

export default getHeader;