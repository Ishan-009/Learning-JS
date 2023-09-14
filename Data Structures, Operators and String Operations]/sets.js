"use strict";

// Set:- Bunch of Values group together, but the elements are different and order of the element in the sets are irrelevant and sets are also iterables just like an array

const orderSet = new Set(["Pasta", "Pizza", "Risotto"]);
console.log(orderSet);

// to check the size of the set
console.log("Size of the Order set :", orderSet.size);

// checking whether element is present in the set or not

// console.log(orderSet.has("Pizza")); // true
// console.log(orderSet.has("Biryani")); // false

// adding and removing elements in set
// console.log(orderSet.add("Dosa"));
// console.log(orderSet.delete("Pizza"));

// Iterating in Sets

// for (const order of orderSet) {
//   console.log(order);
// }

// Use case of set
// to remove duplicate values from multiple values present in array or some thing else

const staff = ["Waiter", "Cheif", "Manager", "Waiter", "Cheif"];

// const roles = new Set(staff);
// console.log(roles);

// Here we are implementing the rest operator here
// which will seperate set values in form of commas and form it into an array
const roles = [...new Set(staff)]; // Here we removed duplicated values and then form an array and store it as roles variable value, with the help of rest operator as sets are iterable , we can use rest operator to seperate values
// console.log(roles);

for (const role of roles) {
  console.log(role);
}

// we could get size of the elements in the set in this way too.

// console.log(new Set(staff).size);
