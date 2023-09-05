"use strict";

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

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(
      `Pizza with Main Ingredient:- ${mainIngredient} with Other Ingredient:- ${otherIngredient}`
    );
  },

  // orderPizza: function ([mainIngredient, ...otherIngredient]) {
  //   console.log(
  //     `Pizza with Main Ingredient:- ${mainIngredient} with Other Ingredient:- ${otherIngredient}`
  //   );
  // },
};

// Spread Operator is on the right side of assignment operator
// let [c, b] = restaurant.mainMenu;
// console.log(c, b);

// Rest Operator because it is left side of assignment operator
// it takes all the remaining/rest of  element of the array in itself,
// it should be defined last, as it collects all the elements
// so thsi let [a,...rest,b] = restaurant.mainMenu; will give error, as js does not know where to stop as we are using rest opeartor

// Rest Operator/Pattern in Array

let [a, ...restElements] = restaurant.mainMenu;
console.log(a, restElements);

// Rest Pattern Operator with objects

let { thu, ...weekdays } = restaurant.openingHours;
console.log(
  `Thurday Timings :- ${JSON.stringify(thu)}, Weekdays timing ${JSON.stringify(
    weekdays
  )}`
);

// Rest Pattern with function

const add = function (
  ...numbers // using rest operators to pack the multiple or single values in to the numbers array
) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

let arr = [1, 23, 445, 6];

add(2, 3);
add(...arr); // using spread operator to spread/unpack the array values
add(4, 56, 7, 8, 8, 8);

// Here we are using rest operators in function parameters which is also known as rest araguments, where it could multiple arguments , in form of array or single values , while invoking the function second time we are using spread operator to unpack the elements of the array so we could pass them as an individual multiple arguments seperated by commas, thats what rest does

// Rest is used where we have variables seperated by commas and spread is used when we have to seperate values by commas this is subtle difference from which you would know where you would rest or spread operator depending upon the usecase

// const Ingredient = ["Panner", "Mayonese", "Cheese", "Jalepeno", "Sauces"];

restaurant.orderPizza(
  "Paneer",
  "Cheese",
  "Sauces",
  "Olives",
  "Spinach",
  "Corn"
);

restaurant.orderPizza("Corn");
