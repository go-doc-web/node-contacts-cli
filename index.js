const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const contactsAll = await contacts.listContacts();
            console.log(contactsAll);
    }
}

invokeAction({ action: 'list' });