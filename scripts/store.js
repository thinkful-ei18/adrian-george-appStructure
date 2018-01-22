{/* <script type="text/javascript" src="scripts/store.js"></script> */}

// eslint - disable - next - line no - unused - vars

 const store = function () {
    const foo = 'bar';
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: ''
  };

  return {
    items,
    hideCheckedItems,
    searchTerm
  };

  // Return the object from your IIFE, with the items, hideCheckedItems, searchTerm exposed

}() );



