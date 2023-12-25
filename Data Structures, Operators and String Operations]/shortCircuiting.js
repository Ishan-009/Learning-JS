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

  bookReservation: function () {
    console.log("Your Reservation has been booked successfully");
  },

  // orderPizza: function ([mainIngredient, ...otherIngredient]) {
  //   console.log(
  //     `Pizza with Main Ingredient:- ${mainIngredient} with Other Ingredient:- ${otherIngredient}`
  //   );
  // },
};

// Short Circuiting

// Short circuiting means that when the first operand in an operator (OR or AND) is evaluated as truthy (in OR) or falsy (in AND), the evaluation stops immediately, and the value is returned.

// Falsy Values :-
// false: The boolean value false is obviously falsy.
// null: The special keyword null represents the absence of any object value.
// undefined: A variable that has not been assigned a value or has been explicitly set to undefined.
// 0: The number zero, when used in a boolean context, is considered falsy.
// NaN: The "Not-a-Number" value, which is the result of an invalid or undefined mathematical operation.
// '' (empty string): An empty string is considered falsy.

console.log("=============== OR ====================");
console.log(0 || false);
console.log(0 || 4);
console.log("" || "Hello");
console.log(0 || false || undefined || "" || "Ishan");

// shortcircuiting or use case in assigning default value or taking existing values

// Normal Variation with Ternary Operator
// restaurant.numOfGuest = 23;
const guest1 = restaurant.numOfGuest ? restaurant.numOfGuest : 10;
console.log(guest1);

const guest2 = restaurant.numOfGuest || 10;
console.log(guest2);

// Here if we set value of restaurant.numOfGuest to 0 it will not print 0 in above two cases because
// 0 is falsy value and it will return truthy value which is 10 in this case

// so how to rectify in the next lecture nullist operator

console.log("==================== AND ===========================");

// Short Circuiting in And Operator , so it works opposite of or operator for sure as it will go on evaluating if values are truthy and return the last truthy value and in case of falsy values it gets false it will not evaluate further as compare to OR operator and returns first falsy value and in case of OR Operator would have return last falsy values so thats the basic/subtle difference

console.log(0 && "");

console.log("Hello" && 0 && false); // 0 it returns first falsy value and does not evaluates further and it kind of makes sense too on how and operator usually works

// We can use && operator to use if conditional statement like if variable exist then do this action
// so here if restaurant name exist , it executes bookReservation function

// if (restaurant.name) {
//   restaurant.bookReservation();
// }

// Using And Operator

restaurant.name && restaurant.bookReservation();

// Using or operator to set defualt values and using && Operator to execute code in second operand if the fist operand value is true

//
//  The Nullish Coalescing Operator (??)

// Here if we set value of restaurant.numOfGuest to 0 it will not print 0 in above two cases because
// 0 is falsy value and it will return truthy value which is 10 in this case

restaurant.numOfGuest = 0;
const guest3 = restaurant.numOfGuest ? restaurant.numOfGuest : 10;
console.log(guest3); // 10

// it prints 10 but we want value to be 0 has defined so we will use nullish Operator
// Nullish Operator:null and undefined
// so how to rectify this using nullist operator

const guestCorrect = restaurant.numOfGuest ?? 10;
console.log(guestCorrect); // 0
