"use strict";

// function defination
// function abc ()
// {

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

// Arrow Functions
// Mainly used for writing oneliner or shorter function code
// In one liner arrow function format it implicitly returns the value but in longer function body statement we have to explicitly return the value in the second example you can demonstrate that
const userName = (firstName) => firstName;

const calcAge = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  return `${firstName} is ${age} years old`;
};

const userAge = calcAge(2000, "Ishan");
console.log(userName("Ishan"));
console.log(userAge);

// Function calling another function

function cutClothPieces(cloth) {
  return cloth * 10;
}

const smallNapkinMaker = function (clothType, clothLots, design) {
  // cut cloth into multiple pieces

  const clothPieces = cutClothPieces(clothLots); // function calling another function

  return `We can make ${clothPieces} pieces of ${clothType} in this particular ${design}`;
};

const napkins = smallNapkinMaker("Cotton", 3, "Flower");

console.log(napkins);
