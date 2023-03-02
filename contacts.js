const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacts = JSON.parse(await fs.readFile(contactsPath));

    return contacts;
  } catch (error) {
    console.error("\x1B[31mError: ", error.message);
  }
}

async function getContactById(contactId) {
  const contacts = await listContacts();

  if (!contacts) return new Error("\x1B[31mContacts not found");

  const foundContact = contacts.find(({ id }) => id === contactId);

  if (!foundContact)
    return new Error(`\x1B[31mContact with index "${contactId}" not found`);

  return foundContact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();

  if (!contacts) return new Error("\x1B[31mContacts not found");

  const index = contacts.findIndex(({ id }) => id === contactId);

  if (index === -1)
    return new Error(`\x1B[31mContact with index "${contactId}" not found`);

  const [removedContact] = contacts.splice(index, 1);

  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));

    return removedContact;
  } catch (error) {
    console.error("\x1B[31mError: ", error.message);
  }
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();

  if (!contacts) return new Error("\x1B[31mContacts not found");

  const newContact = { id: setId(contacts), name, email, phone };
  contacts.push(newContact);

  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));

    return newContact;
  } catch (error) {
    console.error("\x1B[31mError: ", error.message);
  }
}

function setId(contacts) {
  const newId = contacts.reduce(
    (largeId, { id }) =>
      (largeId = largeId > Number(id) ? largeId : Number(id)),
    0
  );

  return (newId + 1).toString();
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
