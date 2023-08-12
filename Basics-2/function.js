"use strict";

// function abc ()
// {
// function defination
// }

// function types

// function Declaration // Generic Function
function sum(a, b) {
  // function (parameters)
  return a + b;
}

const sumValue = sum(10, 20); // function(arguments)

console.log(sumValue);

// Function Expression

const a = function (a, b) {
  return a + b;
};

let sumValue2 = a(20, 30);

console.log(sumValue2);
