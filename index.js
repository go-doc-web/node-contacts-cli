const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const contactsAll = await contacts.listContacts();
            return console.log(contactsAll);
        case "get":
            const getById = await contacts.getContactById(id);
            return console.log(getById);
    }
}

// invokeAction({ action: 'list' });
invokeAction({ action: 'get' ,id:'AeHIrLTr6JkxGE6SN-0Rw'});