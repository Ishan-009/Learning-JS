"use strict";

// Closures

// IIFE Immediately Invoked function expression

//

(function () {
  console.log("Print this once only using IIFE");
})();

// Call and Apply Methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book("234", "Ishan");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// so here we can use book function defined in lusthanfa in another object either by defining functin outside or we can simply assign value of the function to another variable explicilty

// like this way

const book = lufthansa.book;

// but the problem is the method is using this keyword, if I call thsi method it wll be a sepearte function body not method instide object right

//Wont work
// book(22, "Ishan");
// Cannot read properties of undefined (reading 'airline')

// problem is method is using this keyword inside lusthanfa object, but if suppose we want to use this method in another object by this way only then we have to define this to the object and then we can use this method or you can se redefine this for this method so we can use this method on any object ,

// or say we have to write a method outside object which containes code which has logic with this keyword that we want to use at any object on our codebase, so now we can use the call method and other methods to redefine this keyword to the object so that we can use that method with object we want

// now here it comes "call"  method
//  Remember every function is object  and object has methods therefore functions being object can also have methods
console.log("======= Call Method =====");
book.call(eurowings, 467, "Ishan");

// book.call(object,remaining functin arguments),
// so here call method first argument is object that we want this keywords to point to or have value of , and then rest of the argument are remaining function argument as it is in we call normal function

// So this time, we did actually not call the book function ourselves. Instead, we called the call method and it's then this call method, which will call the book function with the this keyword set to eurowings. So whatever we pass has the first argument of the call method. And so this allows us to manually and explicitly set the this keyword of any function that we want to call. Then all the arguments after the first one are simply the arguments of the original function.

// hence we can manipulate this keyword by this methods

// Apply methods

// this is same as call methods just differnce is it takes object as an argument and then takes array as an argument defining function arguments , this method is not used widely anymore as we have better way to use with call method even with array as an argument

const swiss = {
  iataCode: "SW",
  airline: "Swiss International",
  bookings: [],
};
console.log("======= Apply Method =====");

const arrayArguments = [1243, "Ishan"];
book.apply(swiss, arrayArguments);

// better way with call even though remaining functinal argument is in array form
book.call(swiss, ...arrayArguments);

// Hence apply method is not widely used, most people prefer call method instead

// ================ Lets move on to another methods which is bind method , which is most important. ============
console.log("======= Bind Method =====");
const bookSW = book.bind(swiss);
bookSW(4556, "Ishan Moorjmalani");

// The difference is that bind does not immediately call the function. Instead it returns a new function where this keyword is bound to the object . So it's set to whatever value we pass into bind.

// We can use the bind method to create a new function with the this keyword also set to Eurowings, all right? So again, this will not call the book function. Instead it will return a new function where this keyword will always be set to Eurowings.

// then we can call the function as normally with normal arguments it will work

// And this then makes it a little bit easier to book a flight for each of the airlines, if we have to do it multiple times. So instead of having to use a call all the time, we can just do bind once. So defining the this keyword once like this and from there on, we can always use these functions later on in our code.

// we can take one step futher by presetting functional arguments with bind method, so here while calling we have to only pass arguments which we have not presetted with  bind method , hence it can be useful in some scenarios

console.log(
  "======== Using bind method further by presetting some functional arguments ========"
);
const bookSW23 = book.bind(swiss, 1243);
bookSW23("Ishan");
bookSW23("Kamlesh");

// Now, there are other scenarios in which we can use the bind method and where it is very useful. And one example of that is when we use objects together with event listeners.

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

// this below doesnt work , as when working with dom or say documents , the this keyword will always point to the element event which is being called on , thats why it does not works as "this keyword " points to the button element
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);

// so below we are using bind method because we want function as a argument instead of call as it calls the function, so we use bind method here as it returns the function value and in it we manually set or redefine  this keyword to the lufthansa object ,

// document
//   .querySelector(".buy")
//   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Appication meaning  Presetting parameters
// so here we use bind not really caring about this keyword hence we use bind to preset some functional argument and as bind returns the function then we obtain a whole new function with predefined arguments of the function we want
// for example
console.log("======= Partial Application =======");
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.33, 1000));

// so below what we did was we did not really cared about thsi keyword hence we put first argumetn as null as done in industry standard and then as usual we define rest of the functional argument normally, here we predefined or preset the functional argument value to the our manually defined value, we used bind on the function so hence we get whole new returned function with presetted functional value argument as we want , kind of acts a transformation / copy but with different functional parameter values

// Here order of the argument is important should be same as functioan you want to bind same applied with object methods

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(10000));

// Coding challenge

// Perform same functionality as above using function returning another functions without using bind
console.log(
  "======Coding Challenge :- Implement above functioanlity using function returning another function ===="
);
function calculateTax(rate) {
  return function calculateVAT(value) {
    console.log(value + value * rate);
  };
}

const calculateVATReturnFunction = calculateTax(0.23);
calculateVATReturnFunction(8989);

// =================================Function returning Functions =========================================
// so in js we can write a function that   can return a function , then we can outer function which returns a functions and then collect it in a variable then explicitly call inner function by parenthesis as it returns functions which is a value and then aplying parenthesis we are calling the function , or same we can do it without storing in  a variable and then call function
// see below example for more understsanding

// const greeting = function (greeting) {
//   return function (name) {
//     console.log(greeting + " " + name);
//   };
// };

// // first approach storing in variable then calling function with parenthesis
// const greetWithName = greeting("Hey");
// greetWithName("Ishan");

// // second approach explicitly calling outer functon adn inner function together

// // greeting("Hey") => returns a value which is a function and we are calling that value which is a function with required parameter

// greeting("Hey")("Ishan");

// // Performing same approach with arrow functions
// console.log("with arrow functions => ");
// const arrowGreeting = (greeting) => {
//   return function (name) {
//     console.log(greeting + " " + name);
//   };
// };
// const varArrowGreeting = arrowGreeting("Hey");
// varArrowGreeting("Siri");
// arrowGreeting("Hey")("Ishan");

//--------------------- Higher order functions , accepting callback functions ---------------------------------

// here we are passing callback to the higher order functions amongst the argument as a value, and then we get the function/callback functions as value inside in function body then we can explicilty call them and use them to peform some oepratins

// However there are also certain inbuilt higher order functions present in javascript , which automatically invoke callback function without explicitly calling them , means javascript calls them automatically , on its own and implement callback function . Example :- document.body.addEventListener("click",callbackFunction)

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.replace(/ /g, "").toLowerCase();
//   return [first.toUpperCase(), ...others].join("");
// };

// const lowerString = function (str) {
//   const lowerStr = str.toLowerCase();
//   return lowerStr;
// };

// const transformerFunction = function (str, fn) {
//   console.log("original string", str);
//   // calling callback function
//   console.log(`Transformed string :- ${fn(str)}`);

//   console.log(`Transformed by ${fn.name} function`);
// };

// transformerFunction("ishan", upperFirstWord);
// transformerFunction("ISHAN ", lowerString);
// first class functions vs higher order functions in js

// first class functions in js means they are values and type of a object which can be stored in a variable , passed into as function argument, we can return a function from a function

// higher order function :-

// Higher Order Function are a function which recieives another function as a argument or return a new function or does both

// Difference

// first class functions is a feature in programming language which means functions are value in itself

// whereas higher order function are functions which actually have function as argument or maybe return new function as argument

// this a difference people think it is same but there is subtle difference that we have to take note off.

// How Passing Argument Works: Value vs Reference

// const flight = "LHK2023";
// const ishan = {
//   name: "Ishan Moorjmalani",
//   passport: "SGJ63527",
// };

// const checkIn = function (flight, ishan) {
//   flight = "AirIndia " + flight;
//   ishan.name = "Mr. " + ishan.name;

//   if (ishan.passport === "SGJ63527") {
//     console.log(ishan.name + "Checked In Successfully to flight " + flight);
//   } else {
//     console.log(ishan.name, "Not Checked In");
//   }
// };
// checkIn(flight, ishan);
// console.log(flight);
// console.log(ishan);

// Here we passed flight which is primitive value and ishan which is a object , you can see the properties of the object is changed in the function and also reflects outside the function but for primitive value fligth variable the values does nto changes or reflects the value changed in the function body

// It is because when we pass primitive value to the function then what happens is copy of that primitive value is passed to the function argument not actual primitive variable but when we pass object the reference is passed which points to the object in the heap memory , so now both reference objedt and orginal object point towards to same object in heap memory

// Important
// Javascript does not have pass by reference

// here when we pass object in function , it is still pass by value which holds memory address of the object
// so we pass a reference to the function but not pass by reference , important distinction , we pass a value which has address that is reference to memory address to the object addresss in heap memory,

// const bookings = [];

// // Default Parameters :- In ES6 we can define default parameter in the function parameter itself with some default value if the argument value is not passed in the function

// // we can also numPassenger value in another default parameter as below to calculate some expression but then you dont have to pass value for price , otherwise it will set that passed argument value as price
// const createBooking = function (
//   flightNum,
//   numPassenger = 1,
//   price = 199 * numPassenger
// ) {
//   // ES5 way
//   // In ES5 we have to manually define parameter again in function body if suppose we dont get value by parameter of the function or say no argument value is passed for the given parameter in function call , so we have to do in this  way using short circuiting
//   // numPassenger = numPassenger || 1;
//   // price = price || 199;

//   // Here we are using enhanced object literal , not defining key value, we are jsut passing variable it will automatically create key with same nanme as variable and assign value to the key as property
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };

//   bookings.push(booking);
//   console.log(bookings);
// };

// // not passing valeu to the other arguments
// createBooking("LHK01");

// // we dont want to set any default parameters or any value to the parmeter that is defualt parameter then we have to pass undefined or skip value

// createBooking("LKJH01", 2);
