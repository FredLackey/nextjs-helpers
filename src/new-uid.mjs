import newGuid from "./new-guid.mjs";

const newUid = () => {
  const guid = newGuid();
  return guid.split('-').join('').toUpperCase();
};

export default newUid;
