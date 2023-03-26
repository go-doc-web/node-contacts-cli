const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
   switch (action) {
      case 'list':
         const contactsAll = await contacts.listContacts();
         return console.log(contactsAll);
      case 'get':
         const getById = await contacts.getContactById(id);
         return console.log(getById);
      case 'add':
         const add = await contacts.addContact({
            name,
            email,
            phone,
         });
         return console.log(add);
   }
};

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get' ,id:'AeHIrLTr6JkxGE6SN-0Rw'});
invokeAction({
   action: 'add',
   name: 'Oleg',
   email: 'oleg@compileFunction.ua',
   phone: '398-235-89',
});
