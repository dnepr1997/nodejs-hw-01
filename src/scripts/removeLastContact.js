import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const item = await readContacts();
  item.pop();
  await writeContacts(item);
};

removeLastContact();
