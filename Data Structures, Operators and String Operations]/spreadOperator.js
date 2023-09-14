"use strict";
const prompt = require("prompt-sync")();

const PromptSync = require("prompt-sync");

// Data needed for the first part of the section
let restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (mainStarterIndex, mainMenuIndex) {
    return [this.starterMenu[mainStarterIndex], this.mainMenu[mainMenuIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your item: ${ing1} with ${ing2} and ${ing3}`);
  },
};

// Spread Operator

// Use Case #1: When we want to add some additional values but also include the array's individual values of some existing array before or after new values into a new array

let arr = [1, 2, 3];
let newArray = [...arr, 4, 5, 6];
let newArray1 = [4, 5, 6, ...arr];
console.log(newArray);
console.log(newArray1);

// Use Case #2: We want to print array values individually
// It saves us some manual work, like looping or manually accessing array elements using indexes

let arrValues = [1, 2, 3];
console.log(...arrValues);

// Spread Operator examples with the restaurant object
// Updating the menu by adding new items to the existing old menu items too

const newMenu = [...restaurant.mainMenu, "PavBhaji"];
console.log("New Menu", newMenu);
// The difference between spread operators and destructuring is that the spread operator does not create new variables to assign them values by unpacking them individually, whereas destructuring does.

// Spread Operator can be used in places where we have to write values separated by commas.

// Two important use cases of spread operators:

// 1 => Create a shallow copy of the array
// 2 => and to merge two arrays together

// 1 => Create a shallow copy of the array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// 2 => and to merge two arrays together
// Combining the starter menu and main menu into the whole menu

const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("Whole Menu", wholeMenu);

// Spread operator works on iterables, like arrays, strings, sets, but not objects.

// Iterables are array, string, sets, not objects

// Using Spread Operator on Strings.

let string = "Ishan";
console.log(...string);
let newString = [...string, "M"];
console.log(`New String ${newString}`);

// Spread Operators with methods
//

// const pastaIngredients = [
//   prompt("Enter 1st ingredient "),
//   prompt("Enter 2nd ingredient "),
//   prompt("Enter 3rd ingredient "),
// ];

// console.log(...pastaIngredients);

// restaurant.orderPasta(...pastaIngredients);

// In ES2018: Spread also works on objects.

// Here we can use the spread operator to copy an object and add additional values,
// and also to create a shallow copy of the object, similar to how we used to do with Object.assign.

const newRestaurant = {
  foundedIn: 2000,
  ...restaurant,
  newLocation: "Vadodara",
};
console.log(newRestaurant);

newRestaurant.name = "Ishan's Kitchen";

console.log(newRestaurant);

// const arrowFunction = () => {
//   return "Arrow Function"; // This is a block statement
// };

// console.log(arrowFunction());
