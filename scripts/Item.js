'use strict';


const Item = (function () {
  // const foo = 'bar';

  function validateName (name) {
    // Makes sure we can't add items without a name.
    if (!name) {
      throw new TypeError ('Name does not exist');
    }
  }

  function create (name) {
    // The function should return a new item object with the following attributes:
    // id - invoke cuid() to create a unique id
    // name - the value of parameter name
    // checked - defaults to false
    // Testing out the method below:
    // console.log('create method is running!');
    return {
      id: cuid(),
      name: name,
      checked: false
    };
  }

  return {
    validateName,
    create
  };

}() );

// console.log(item);
// console.log(foo);

