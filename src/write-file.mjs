import fs from 'fs';
import path from 'path';
import makePath from './make-path.mjs';
import isFile from './is-file.mjs';

const writeFile = (filePath, contents = '') => {

  if (!makePath(path.dirname(filePath))) {
    return false;
  }

  try {
    fs.writeFileSync(filePath, String(contents));
  } catch (ex) {
    return false;
  }

  return isFile(filePath);
};

export default writeFile;
