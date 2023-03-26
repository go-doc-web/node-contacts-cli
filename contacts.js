const fs = require('fs/promises');

const path = require('path');

const contactsPath = path.join(`${__dirname}`, './db/contacts.json');
const { nanoid } = require('nanoid');

const listContacts = async () => {
   const contacts = await fs.readFile(contactsPath);
   return JSON.parse(contacts);
};

const getContactById = async contactId => {
   const contacts = await listContacts();
   const result = contacts.find(item => item.id === contactId);
   return result || null;
};

const addContact = async ({ name, email, phone }) => {
   const contacts = await listContacts();
   const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
   };
   contacts.push(newContact);
   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
   return newContact;
};

module.exports = {
   listContacts,
   getContactById,
   addContact,
};
