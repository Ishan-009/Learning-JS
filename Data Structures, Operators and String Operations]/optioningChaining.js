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

// Opening Chaining ?.
// It is useful to check if value exists or not and depending on that we could take further action
// with nullish or || or any logical comparision opeartor

// Option chaining working with variables/property

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open;
  console.log(`On ${day}, we open at ${open ?? `Closed`}`);
  // console.log(restaurant.openingHours[day].open); // this statement gives error as not all week days have open method or there are not opening hours for all of the days , for that we can use optionchaining which helps us perform check in shorter syntax as compare to if statements
}

// optioning chaining in methods
console.log(restaurant?.orderRossitto?.("Rossitto") ?? "Method does not exist");

// Optional Chaining in Arrays
console.log(restaurant.categories?.[50] ?? "Not Defined");

const userArray = [{ name: "Ishan" }];
console.log(userArray[0]?.name ?? "Array Does not Exists");
//Here when we implement optional chaining , it is implemented on the array itself, it will handle both the cases if array does not exist or not and also the index we are trying to access if exists or not
