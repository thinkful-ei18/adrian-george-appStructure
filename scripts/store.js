// eslint - disable - next - line no - unused - vars
/* global Item, cuid */

'use strict';

const store = (function () {
  const foo = 'bar';

  function findById (id) {
    return store.items.find(function (item) {
      if (id === item.id ) {
        return true;
      }
    });
  }

  function addItem (name) {
    try {
      Item.validateName(name);
      let newItem = Item.create(name);
      store.items.push(newItem);
    } catch (error) {
      console.log(`${error.message}`);
    }
  }

  function findAndToggleChecked (id) {
    const foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
  }

  function findAndUpdateName (id, newName) {
    try {
      Item.validateName(newName);
      const foundItem = this.findById(id);
      foundItem.name = newName;
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
  }

  function findAndDelete (id) {
    // 1. get the foundItem
    const foundItem = this.findById(id);
    //2. find the index of the item in the items array
    const itemIndex = store.items.indexOf(foundItem);
    // 3. delete the foundItem using the splice method
    store.items.splice(itemIndex, 1);
  }


  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: '',
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };

}() );



