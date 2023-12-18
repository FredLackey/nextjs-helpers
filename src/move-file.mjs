import fs from 'fs';
import path from 'path';
import isFile from './is-file.mjs';
import deleteFile from './delete-file.mjs';
import makePath from './make-path.mjs';

const rename = (sourcePath, destinationPath) => {
  try {
    fs.renameSync(sourcePath, destinationPath);
  } catch (ex) {
    return false;
  }
  return isFile(destinationPath);
};

const moveFile = (sourcePath, destinationPath) => {

  if (!makePath(path.dirname(destinationPath))) { return false; }

  if (rename(sourcePath, destinationPath)) {
    return true;
  }

  try {
    fs.copyFileSync(sourcePath, destinationPath);
  } catch (ex) {
    return false;
  }

  if (!isFile(destinationPath)) { return false; }
  return deleteFile(sourcePath);
};

export default moveFile;
