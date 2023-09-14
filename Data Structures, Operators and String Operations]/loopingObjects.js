"use strict";

// we can loop over property names, properties or both

"use strict";
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
  },
  [`Day${2 + 4}`]: {
    open: "12:00",
    close: "8:00",
  },
};

// looping over object keys
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open on ${properties.length} days `);

// Looping over object values
const values = Object.values(openingHours);
console.log(values);

// getting object in form of an array which has indivual values in the form of key adn value at each index , and further we will looop over this we can use both object keys and values

const entries = Object.entries(openingHours);
console.log(entries); // here we get values of array index in the form key and values :- [['thu',{open:12.close:22}]]

for (let [key, { open, close }] of entries) {
  console.log(
    `On this ${key}, the restaurant is open at ${open} and close at ${close}`
  );
}
