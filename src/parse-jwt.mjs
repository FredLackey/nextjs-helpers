import isValidString from "./is-valid-string.mjs";
import isObject from "./is-object.mjs";
import jwt from "./jwt.mjs";

const IGNORE_EXPIRATION = true;
const ENFORCE_EXPIRATION = false;

const parseJwt = (token, secret) => {

  const claims = isValidString(token) ? jwt.decode(token) : null;
  const session = isObject(claims) ? jwt.fromClaims(claims) : null;
  const isValid = claims && secret && isObject(jwt.verify(token, secret, IGNORE_EXPIRATION));
  const isExpired = isValid && !isObject(jwt.verify(token, secret, ENFORCE_EXPIRATION));

  const result = {
    token: isValidString(token) ? token : null,
    claims,
    session,
    isValid,
    isExpired
  };

  return result;
};

export default parseJwt;