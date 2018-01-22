'use strict';

const item = (function () {
  const foo = 'bar';

  return {
    validateName(){},
    create(){}
  };

}() );

const validateName = function (name) {
  // Makes sure we can't add items without a name.
  return name ? ' ' : console.log('Name does not exist.');
};

const create = function (name) {
  // The function should return a new item object with the following attributes:
  // id - invoke cuid() to create a unique id
  // name - the value of parameter name
  // checked - defaults to false
  return {
    id: cuid(),
    name: name,
    checked: false
  };
};

console.log(item);
// console.log(foo);