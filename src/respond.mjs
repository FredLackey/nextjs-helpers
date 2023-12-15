import Server from 'next/server';
import isObject from './is-object.mjs';
import isValidString from './is-valid-string.mjs';
import isNumber from './is-number.mjs';

const EMPTY_NOT_OKAY = false;
const DEFAULT_STATUS = 200;

const respond = async (data, statusCode = DEFAULT_STATUS) => {

  const response = isObject(data)
    ? data
    : isValidString(data, EMPTY_NOT_OKAY)
      ? { message: data }
      : { };

  const status = isNumber(statusCode)
    ? statusCode
    : DEFAULT_STATUS;

  return Server.NextResponse.json(response, { status });

};

export default respond;
