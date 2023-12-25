"use strict";

// first enhanced object literal thing introduced in es6 in objects

// we can include any other object by passing its name in the object instead of doing this

// openingHours:openingHours,

// we can simply mention openingHours variable name in the object as a key property so it will be part of the object

// like this

const openingHours = {
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
};

const openingDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (mainStarterIndex, mainMenuIndex) {
    return [this.starterMenu[mainStarterIndex], this.mainMenu[mainMenuIndex]];
  },
  openingHours,
  orderPizza() {
    console.log("Pizza not available");
  },
  [openingDays[3]]: {
    open: "12:00",
    close: "8:00",
  }, // 3rd thing we can do mention property name this way and compute the values,
  [`Day${2 + 4}`]: {
    open: "12:00",
    close: "8:00",
  },
};

console.log(restaurant);

// second we can do is
// we do not have to set out property to function expression to create method inside the object
// reference orderPizza function in restaurant object

// third we can do
// is compute any property like this in object [openingDays[3]]: data;
// or like this [`Day ${2+4}`]: data ;
// it will work we can access it by using object
