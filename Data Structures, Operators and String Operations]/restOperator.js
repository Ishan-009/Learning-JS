"use strict";
const prompt = require("prompt-sync")();

const PromptSync = require("prompt-sync");

// Data needed for first part of the section
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
    console.log(`Heres is your item :-  ${ing1} with ${ing2} and ${ing3}`);
  },
};

// Rest Operator

// UseCase  #1 When we want to add some additional values but also include the arr individual values of some exisiting array before or after new values into new array

let arr = [1, 2, 3];
let newArray = [...arr, 4, 5, 6];
let newArray1 = [4, 5, 6, ...arr];
console.log(newArray);
console.log(newArray1);

// #2 Usecase : we want to print array values individually
// It saves use some manual work, like looping or manually doing with array indexes
let arrValues = [1, 2, 3];
console.log(...arrValues);

// Rest Operator examples with restaurant object
// Updating Menu by adding new items to the exisiting old menu items too

const newMenu = [...restaurant.mainMenu, "PavBhaji"];
console.log("new Menu", newMenu);
// Difference between spread operators and destructing is that spread operator does not create new variables to assign them values by unpacking them individually and destructing does that , thats a main difference

// Rest Operator can be used in places where we have to write values seperated by commas.

// Two Important use cases of spread operators :

// 1 => Create Shallow Copy of the array
// 2 => and to merge two arrays together

// 1 => Create Shallow Copy of the array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// 2 => and to merge two arrays together
// Combininb starter Menu and main Menu to the whole Menu

const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log("wholeMenu", wholeMenu);

// Rest operator works on iterables, like hash, maps, sets,array ,stirngs, but not object

// Iterables are array, string, sets, not object

// Using Spread Operator on Strings.

let string = "Ishan";
console.log(...string);
let newString = [...string, "M"];
console.log(`New String ${newString}`);

// console.log(`${...newString}`); // this will error because template literal do not expect values seperated by commas in its code block bracket so in these type of scenario ,rest operator can only be used in the function parameters or we build new array or something where multiple parameter are accepted

// Rest Operators with the methods
//

// const pastaIngredients = [
//   prompt("Enter 1st ingredient "),
//   prompt("Enter 2nd ingredient "),
//   prompt("Enter 3rd ingredient "),
// ];

// console.log(...pastaIngredients);

// restaurant.orderPasta(...pastaIngredients);

// In ES18 :- Spread also works on the object

// Here we can use spread operator to copy object and add additonal values
// and also to create shallow copy of the object as we used to do with object.assign

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
