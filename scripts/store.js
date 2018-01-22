// eslint - disable - next - line no - unused - vars
/* global Item, cuid */

'use strict';

const store = (function () {
  // const foo = 'bar';

  // Part 1 of the refactoring process. 
  function findById (id) {
    return this.items.find(function (item) {
      if (id === item.id ) {
        return true;
      }
    });
  }

  function addItem (name) {
    try {
      Item.validateName(name);
      let newItem = Item.create(name);
      this.items.push(newItem);
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
    const itemIndex = this.items.indexOf(foundItem);
    // 3. delete the foundItem using the splice method
    this.items.splice(itemIndex, 1);
  }

  // Part 2 of our refactoring process
  function toggleCheckedFilter () {
    // Make a method in store called toggleCheckedFilter which toggles this.hideCheckedFilter prop

    this.hideCheckedItems = !this.hideCheckedItems;
  }

  function setSearchTerm (val) {
    // Make another store method called setSearchTerm which changes this.searchTerm to the first argument passed in
    // Assign searchTerm to the first argument passed in.
    this.searchTerm = arguments[0];
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
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };

}() );



