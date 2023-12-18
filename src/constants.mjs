export const ALPHA        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const ALPHANUMERIC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
export const CLEAR_CODE   = 'ACDEFGHJKLMNPRTVWXY0123456789';
export const DIGITS       = '0123456789';
export const ENUM_NAME    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
export const EMPTY_GUID   = '00000000-0000-0000-0000-000000000000';
export const EMPTY_UID    = '00000000000000000000000000000000';
export const ZERO_DATE    = new Date('1970-01-01Z00:00:00:000');

  // INTERNAL
export const SALT_OPTION   = 'base64';
export const HMAC_OPTION   = 'sha1';
export const DIGEST_OPTION = 'hex';
export const ENCODE_FORMAT = 'base64';
export const DECODE_FORMAT = 'ascii';
export const STRING_HMAC   = 'md5';

export const DEFAULTS = {
  CODE: {
    LENGTH: 6,
    CHARS : CLEAR_CODE,
  }
};
