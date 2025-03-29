import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
  const item = await readContacts();
  return item.length;
};

console.log(await countContacts());
