// 5 Falsy Values :- 0, undefined, null, Nan, '' (empty string)
// Here Js will consider these above values as false when it does some conversion to boolean operation on these values other than the other values are truth/true values.

let value = 0; // here falsy value is assigned

// 2 scenario when it comes to the usecase using these falsy adn truth values in logic in js

let money = 0;

if (money) {
  console.log("You can spend your money");
} else {
  console.log("You can't spend the money");
}

if (value) {
  console.log("Value is true");
} else {
  console.log("Value is false");
}

let height;

if (height) {
  console.log("Height is defined");
} else {
  console.log("Heigth is undefined");
}
