import fs from 'fs';
import path from 'path';
import isDirectory from './is-directory.mjs';
import isValidString from './is-valid-string.mjs';

const getFiles = folderPath => {
  if (!isDirectory(folderPath)) { return null; }
  try {
    const names = fs.readdirSync(folderPath);
    return [].concat(names)
      .filter(isValidString)
      .map(name => (path.join(folderPath, name)));
  } catch (ex) {
    return null;
  }
};

export default getFiles;
