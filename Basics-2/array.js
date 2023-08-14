let contactInfo = [
  6351414926,
  "ishmoorjmalani66@gmail.com",
  "ishanmoorjmalani009@gmail.com",
];
const Ishan = ["Ishan", "Moorjmalani", 22, contactInfo];

console.log(Ishan);

const age = 2023 - 2001;

Ishan[2] = age;

console.log(Ishan);

Ishan[2] = 2023 - 2001;

console.log(age);

// Array Methods

const friends = ["Ram", "Lakhan", "Raju", "Raman"];

console.log("New Element Added Index", friends.push("Chaman")); // push :- adds new element to the end of array and returns the index of it
console.log(friends);

console.log(friends.unshift("Raghu")); // adds element to the beginning of the array and returns new length of the array
console.log(friends);

// POP , shift

console.log("pop", friends.pop()); // removes last element and returns the removed element
console.log(friends);

console.log("shift", friends.shift()); // removes first element and returns the removed element
console.log(friends);

// indexOf, and includes method

console.log("indexOf", friends.indexOf("Ram")); // it returns the index of the searched element, adn if element noe present it returns -1;

console.log(friends.includes("Ram")); // it returns true if value is present else false if value not present

// Array and function Excercise

/* Write your code below. Good luck! 🙂 */

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total);

const number = [6351414926];

console.log(number + 10);
