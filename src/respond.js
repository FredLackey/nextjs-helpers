import Server from 'next/server';
import isDigits from './is-digits';
import isObject from './is-object';
import isNumber from './is-number';
import isValidArray from './is-valid-array';
import trimToUndefined from './trim-to-undefined';

const DEFAULT_STATUS = 200;
const DEFAULT_CODE = -1;
const EMPTY_OK = true;

const respond = async (data, httpStatusCode = DEFAULT_STATUS, statusCode = DEFAULT_CODE) => {

  const status = (isNumber(statusCode) || isDigits(statusCode)) && Number(statusCode) !== DEFAULT_CODE
    ? Number(statusCode)
    : undefined;

  const response = isObject(data)
    ? { data, status }
    : isValidArray(data, EMPTY_OK)
      ? { data, status }
      : { message: trimToUndefined(data), status };

  const httpStatus = (isNumber(httpStatusCode) || isDigits(httpStatusCode))
    ? Number(httpStatusCode)
    : DEFAULT_STATUS;

  return Server.NextResponse.json(response, { status: httpStatus });

};

export default respond;
