// eslint - disable - next - line no - unused - vars
/* global cuid */

'use strict';

const store = (function () {
  const foo = 'bar';

  return {
    items: [
      { id: cuid(), name: 'apples', checked: false },
      { id: cuid(), name: 'oranges', checked: false },
      { id: cuid(), name: 'milk', checked: true },
      { id: cuid(), name: 'bread', checked: false }
    ],
    hideCheckedItems: false,
    searchTerm: ''
  };

}() );



