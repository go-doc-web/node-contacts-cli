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
      case 'remove':
         const remove = await contacts.removeContact(id);
         return console.log(remove);

      default:
         console.warn('\x1B[31m Unknown action type!');
   }
};

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get' ,id:'AeHIrLTr6JkxGE6SN-0Rw'});
// invokeAction({
//    action: 'add1',
//    name: 'Oleg',
//    email: 'oleg@compileFunction.ua',
//    phone: '398-235-89',
// });

invokeAction({ action: 'remove', id: 'drsAJ4SHPYqZeG-83QTVW' });
