import fs from 'fs';
import isFolder from './is-folder.mjs';
import isValidString from './is-valid-string.mjs';

const createPath = value => {
  if (!isValidString(value)) { return false; }
  if (isFolder(value)) { return true; }
  try {
    fs.mkdirSync(value, {
      recursive: true,
    });
  } catch (ex) {
    console.error(ex);
  }
  return isFolder(value);
};

export default createPath;
