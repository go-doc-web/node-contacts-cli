const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(`${__dirname}`, './db/contacts.json');

const listContacts = async () => {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts)
}

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    return result || null;
}


module.exports = {listContacts,getContactById};