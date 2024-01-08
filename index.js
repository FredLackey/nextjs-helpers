import addMinutes from "./src/add-minutes";
import cleanAlphanumeric from "./src/clean-alphanumeric";
import cleanDigits from "./src/clean-digits";
import cleanDto from "./src/clean-dto";
import cleanString from "./src/clean-string";
import constants from "./src/constants";
import copyObject from "./src/copy-object";
import fromDto from "./src/from-dto";
import fromEpoch from "./src/from-epoch";
import fromIsoDate from "./src/from-iso-date";
import fromJson from "./src/from-json";
import fromResult from "./src/from-result";
import getArrayCount from "./src/get-array-count";
import getBlockDate from "./src/get-blockdate";
import getBody from "./src/get-body";
import getCommonPath from "./src/get-common-path";
import getDuration from "./src/get-duration";
import getEmail from "./src/get-email";
import getEmails from "./src/get-emails";
import getFileName from "./src/get-file-name";
import getFirst from "./src/get-first";
import getHash from "./src/get-hash";
import getId from "./src/get-id";
import getJwt from "./src/get-jwt";
import getLast from "./src/get-last";
import getLatestSemver from "./src/get-latest-semver";
import getMax from "./src/get-max";
import getMin from "./src/get-min";
import getPads from "./src/get-pads";
import getReactVersion from "./src/get-react-version";
import getSingle from "./src/get-single";
import getStringSize from "./src/get-string-size";
import getSubstring from "./src/get-substring";
import getUrlParam from "./src/get-url-param";
import getUrlParams from "./src/get-url-params";
import hasString from "./src/has-string";
import hashString from "./src/hash-string";
import hash from "./src/hash";
import http from "./src/http";
import initArray from "./src/init-array";
import isAlpha from "./src/is-alpha";
import isAlphanumeric from "./src/is-alphanumeric";
import isArray from "./src/is-array";
import isAsync from "./src/is-async";
import isBoolean from "./src/is-boolean";
import isCode from "./src/is-code";
import isDate from "./src/is-date";
import isDefined from "./src/is-defined";
import isDeleted from "./src/is-deleted";
import isDigits from "./src/is-digits";
import isEmail from "./src/is-email";
import isEmpty from "./src/is-empty";
import isEqual from "./src/is-equal";
import isFunction from "./src/is-function";
import isGuidFormat from "./src/is-guid-format";
import isIsoDate from "./src/is-iso-date";
import isJson from "./src/is-json";
import isMatch from "./src/is-match";
import isNumber from "./src/is-number";
import isObject from "./src/is-object";
import isPhoneNumber from "./src/is-phone-number";
import isSameDate from "./src/is-same-date";
import isSemver from "./src/is-semver";
import isString from "./src/is-string";
import isUidFormat from "./src/is-uid-format";
import isValidArray from "./src/is-valid-array";
import isValidChars from "./src/is-valid-chars";
import isValidPath from "./src/is-valid-path";
import isValidString from "./src/is-valid-string";
import isZeroDate from "./src/is-zero-date";
import jwt from "./src/jwt";
import moveDown from "./src/move-down";
import moveObject from "./src/move-object";
import moveUp from "./src/move-up";
import newCode from "./src/new-code";
import newGuid from "./src/new-guid";
import newSalt from "./src/new-salt";
import newUid from "./src/new-uid";
import parseJson from "./src/parse-json";
import parseJwt from "./src/parse-jwt";
import print from "./src/print";
import removeDeleted from "./src/remove-deleted";
import removePrefix from "./src/remove-prefix";
import removeSuffix from "./src/remove-suffix";
import respond from "./src/respond";
import sort from "./src/sort";
import stringify from "./src/stringify";
import toAlphanumeric from "./src/to-alphanumeric";
import toBoolean from "./src/to-boolean";
import toCamelCase from "./src/to-camel-case";
import toDigits from "./src/to-digits";
import toEpoch from "./src/to-epoch";
import toGuidFormat from "./src/to-guid-format";
import toKebabCase from "./src/to-kebab-case";
import toResult from "./src/to-result";
import toSnakeCase from "./src/to-snake-case";
import toTable from "./src/to-table";
import toUidFormat from "./src/to-uid-format";
import trimArray from "./src/trim-array";
import trimString from "./src/trim-string";
import trimToNull from "./src/trim-to-null";
import trimToUndefined from "./src/trim-to-undefined";
import uniqueNumbers from "./src/unique-numbers";
import uniqueObjects from "./src/unique-objects";
import uniqueStrings from "./src/unique-strings";
import unique from "./src/unique";

import cleanAlphaNumeric from "./src/clean-alphanumeric";
import getSubString from "./src/get-substring";
import isAlphaNumeric from "./src/is-alphanumeric";
import isPhone from "./src/is-phone-number";
import first from "./src/get-first";
import last from "./src/get-last";
import single from "./src/get-single";

const {
  ALPHA,
  ALPHANUMERIC,
  CLEAR_CODE,
  DIGITS,
  ENUM_NAME,
  EMPTY_GUID,
  EMPTY_UID,
  ZERO_DATE,
  SALT_OPTION,
  HMAC_OPTION,
  DIGEST_OPTION,
  ENCODE_FORMAT,
  DECODE_FORMAT,
  STRING_HMAC,
  DEFAULTS,
} = constants;

const { doGet, doPost, doDelete, doPut, ping } = http;

export {
  addMinutes,
  cleanAlphanumeric,
  cleanDigits,
  cleanDto,
  cleanString,
  copyObject,
  fromDto,
  fromEpoch,
  fromIsoDate,
  fromJson,
  fromResult,
  getArrayCount,
  getBlockDate,
  getBody,
  getCommonPath,
  getDuration,
  getEmail,
  getEmails,
  getFileName,
  getFirst,
  getHash,
  getId,
  getJwt,
  getLast,
  getLatestSemver,
  getMax,
  getMin,
  getPads,
  getReactVersion,
  getSingle,
  getStringSize,
  getSubstring,
  getUrlParam,
  getUrlParams,
  hasString,
  hashString,
  hash,
  initArray,
  isAlpha,
  isAlphanumeric,
  isArray,
  isAsync,
  isBoolean,
  isCode,
  isDate,
  isDefined,
  isDeleted,
  isDigits,
  isEmail,
  isEmpty,
  isEqual,
  isFunction,
  isGuidFormat,
  isIsoDate,
  isJson,
  isMatch,
  isNumber,
  isObject,
  isPhoneNumber,
  isSameDate,
  isSemver,
  isString,
  isUidFormat,
  isValidArray,
  isValidChars,
  isValidPath,
  isValidString,
  isZeroDate,
  moveDown,
  moveObject,
  moveUp,
  newCode,
  newGuid,
  newSalt,
  newUid,
  parseJson,
  parseJwt,
  print,
  removeDeleted,
  removePrefix,
  removeSuffix,
  respond,
  sort,
  stringify,
  toAlphanumeric,
  toBoolean,
  toCamelCase,
  toDigits,
  toEpoch,
  toGuidFormat,
  toKebabCase,
  toResult,
  toSnakeCase,
  toTable,
  toUidFormat,
  trimArray,
  trimString,
  trimToNull,
  trimToUndefined,
  uniqueNumbers,
  uniqueObjects,
  uniqueStrings,
  unique,

  doGet,
  doPost,
  doDelete,
  doPut,
  ping,
  
  jwt,
  http,

  cleanAlphaNumeric,
  getSubString,
  isAlphaNumeric,
  isPhone,
  first,
  last,
  single,

  ALPHA,
  ALPHANUMERIC,
  CLEAR_CODE,
  DIGITS,
  ENUM_NAME,
  EMPTY_GUID,
  EMPTY_UID,
  ZERO_DATE,
  SALT_OPTION,
  HMAC_OPTION,
  DIGEST_OPTION,
  ENCODE_FORMAT,
  DECODE_FORMAT,
  STRING_HMAC,
  DEFAULTS,
};


export default {
  addMinutes,
  cleanAlphanumeric,
  cleanDigits,
  cleanDto,
  cleanString,
  copyObject,
  fromDto,
  fromEpoch,
  fromIsoDate,
  fromJson,
  fromResult,
  getArrayCount,
  getBlockDate,
  getBody,
  getCommonPath,
  getDuration,
  getEmail,
  getEmails,
  getFileName,
  getFirst,
  getHash,
  getId,
  getJwt,
  getLast,
  getLatestSemver,
  getMax,
  getMin,
  getPads,
  getReactVersion,
  getSingle,
  getStringSize,
  getSubstring,
  getUrlParam,
  getUrlParams,
  hasString,
  hashString,
  hash,
  initArray,
  isAlpha,
  isAlphanumeric,
  isArray,
  isAsync,
  isBoolean,
  isCode,
  isDate,
  isDefined,
  isDeleted,
  isDigits,
  isEmail,
  isEmpty,
  isEqual,
  isFunction,
  isGuidFormat,
  isIsoDate,
  isJson,
  isMatch,
  isNumber,
  isObject,
  isPhoneNumber,
  isSameDate,
  isSemver,
  isString,
  isUidFormat,
  isValidArray,
  isValidChars,
  isValidPath,
  isValidString,
  isZeroDate,
  moveDown,
  moveObject,
  moveUp,
  newCode,
  newGuid,
  newSalt,
  newUid,
  parseJson,
  parseJwt,
  print,
  removeDeleted,
  removePrefix,
  removeSuffix,
  respond,
  sort,
  stringify,
  toAlphanumeric,
  toBoolean,
  toCamelCase,
  toDigits,
  toEpoch,
  toGuidFormat,
  toKebabCase,
  toResult,
  toSnakeCase,
  toTable,
  toUidFormat,
  trimArray,
  trimString,
  trimToNull,
  trimToUndefined,
  uniqueNumbers,
  uniqueObjects,
  uniqueStrings,
  unique,
  
  doGet,
  doPost,
  doDelete,
  doPut,
  ping,
  
  jwt,
  http,

  cleanAlphaNumeric,
  getSubString,
  isAlphaNumeric,
  isPhone,
  first,
  last,
  single,

  ALPHA,
  ALPHANUMERIC,
  CLEAR_CODE,
  DIGITS,
  ENUM_NAME,
  EMPTY_GUID,
  EMPTY_UID,
  ZERO_DATE,
  SALT_OPTION,
  HMAC_OPTION,
  DIGEST_OPTION,
  ENCODE_FORMAT,
  DECODE_FORMAT,
  STRING_HMAC,
  DEFAULTS,
};
