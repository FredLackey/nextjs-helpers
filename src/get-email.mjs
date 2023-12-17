import getEmails from './get-emails.mjs';
import getSingle from './get-single.mjs';

const getEmail = value => {
  const items = getEmails(value);
  return getSingle(items);
};

export default getEmail;
