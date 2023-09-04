"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

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
};

// // destructing the array
// const arr = [2, 3, 4];
// const [a, b, c] = arr;
// console.log(a, b, c);

// getting values from restaurant array
let [mainCategory, , secondaryCategory] = restaurant.categories;
console.log(mainCategory, secondaryCategory);

// Normal Swapping using third variable

// let temp = mainCategory;
// mainCategory = secondaryCategory;
// secondaryCategory = temp;
// console.log(mainCategory, secondaryCategory);

// Swaping Values with the help of destructing
[mainCategory, secondaryCategory] = [secondaryCategory, mainCategory];
console.log(mainCategory, secondaryCategory);

// Receiving Nested Values from an array into the variables
const numArray = [7, 8, [9, 10]];
let [num1, , [num2, num3]] = numArray;
console.log(num1, num2, num3);

// Reciving values from a method and storing them using destructing
const [starterCourse, mainCourse] = restaurant.order(0, 2);
console.log(`Starter :- ${starterCourse} and Main Course is  ${mainCourse}`);

// Assigning default value to the destrcturing variables in case there is no value defined or no no. of value is defined

const apiValues = [0, 2];
const [p = 1, q = 1, r = 1] = apiValues;
console.log(p, q, r);

// Destructing Object

restaurant = {
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
};

// Object Destructing :- Simple way

const { name, location, categories } = restaurant;
console.log("Object Destructing #1", name, location, categories);

// What if you want to assign different variable name ot the destructured object values

// const {
//   name: restaurantName,
//   location: restaurantLocation,
//   categories: tags,
// } = restaurant;

// console.log("Object Destructing #2", restaurantName, restaurantLocation, tags);

// Mutating Variables in object destructing

let a = 10;
let b = 20;

const obj = {
  a: 111,
  b: 222,
  c: 333,
};

// Assigning object key properties to the already exisiting variable, and chnaging them
({ a, b } = obj);

console.log(a, b);

/// Assigning Default Values

let { name: restaurantName = 0, location: restaurantLocation = 0 } = obj;
console.log(restaurantName);
console.log(restaurantLocation);

// Passing Object in the method, is useful when we dont know how many arguments we have to pass and order of the argument is not defined, we can simply pass object with its key values and collect it function parameter in to different variables via object destructing or we can use whole object vice versa, but main thing is we can use destructing here and top of that we can assign default values to these variable in case the value is not present fior that variable.

const exampleObject = {
  sum: function ({ a: value1 = 0, b: value2 = 0 }) {
    console.log("object Destructing function parameter", value1 + value2);
    // console.log(obj); // we can see whole object here we decide to log it when we pass only obj in parameters
  },
};

const objValues = {
  a: 1,
  b: 2,
};
exampleObject.sum(objValues);
