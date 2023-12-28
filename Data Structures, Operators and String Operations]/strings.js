// Strings Operations

const string = "Ishan Moorjmalani";
console.log(string.indexOf("Ishan"));
console.log(string.lastIndexOf("a"));

// Slice to get particular portion of the string using index , start and end arguments
console.log(string.slice(string.indexOf(" ") + 1, string.length));

// getting last character of the string

console.log(string.slice(-1));

// Coding Example

const middleSeatChecker = function (seat) {
  const s = seat.slice("-1");

  if (s === "B" || s === "E") {
    console.log(`${seat} is a middleseat`);
  } else {
    console.log(`${seat} is not a middleseat`);
  }
};
middleSeatChecker("12E");
middleSeatChecker("3E");
middleSeatChecker("1A");

// how calling methods on strings work as it is primitive data type
// because js is smart it converts string into object and then on it we can use methods and it returns new string which is indeed a string type

//Working with strings part-2

//uppercase lowercase

const airlineName = "AirBus Neo";

// converting to lowercase for to compute and build logic efficiently

console.log(airlineName.toLowerCase());
// console.log(airlineName.toUpperCase()); uppercase

// Fixing Capitilization to the name
// Means my output should be like this Ishan , first letter has to be capital

const passenger = "IsHAn";
const passengerLower = passenger.toLowerCase();

const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1); // making first letter captial and then adding sliced string which does not include first letter using slice method

console.log(passengerCorrect);

// comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

const loginEmailLower = loginEmail.toLowerCase();

// removing spacesn using trim

const loginEmailCorrect = loginEmailLower.trim();

console.log(email === loginEmailCorrect);

// replacing

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

const normalizedAnnouncement = announcement.replace("door", "gate");
console.log(normalizedAnnouncement);
// global string expression, which indicates or targets all particular set of string anywhere in a part of string
const correctAnnouncement = announcement.replace(/door/g, "gate");
console.log(correctAnnouncement);

// boolean

const plane = "Airbus A32neo";
// Includes
console.log(plane.includes("Airbus"));
console.log(plane.includes("ne1"));

// Start with and ends with

console.log(plane.endsWith("neo"));

// Finding if the plane is part of airbus(starts with) and under the neo model (ends with)

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of new airbus family ");
}

// Working with strings part 3

// split
// It splits the string and gives us array in return with splitted string in it
const nameString = "Ishan Moorjmalani";

const [firstName, lastName] = nameString.split(" ");
console.log(firstName);

// Join
// Join the input implied with specified input like space and all
const longNameString = ["Mr.", "Ishan", "Moorjmalani"];
const normalizedCorrectString = longNameString.join(" ");
const addtionalNormalizedCorrectString = longNameString.join("+");
console.log(normalizedCorrectString);
console.log(addtionalNormalizedCorrectString);

// Capitialize a name
const nameStringInput = "ishan moorjmalani";
const capitializeFunction = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(""));
};

capitializeFunction(nameStringInput);

// Padding
// it adds second arguments normally to the part of the string at start or finish till the specified length of string mentioned in first argument is reached
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const creditCardMaskedString = function (inputString) {
  const endString = inputString.slice(-4);
  console.log(endString.padStart(inputString.length, "*"));
};

creditCardMaskedString("12344234234");

const messageString =
  "Instructions to Flight number 472 members, Go to Gate No 4 for the boarding ";
// console.log(messageString.repeat(5));

// Repeat
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

//Coding Challenge:- convert into camelcase

const rawString =
  "underscore_case first_name Some_Variable calculate_AGE delayed_departure";

const convertToCamelCase = function (rawInputString) {
  const lowerCasedString = rawInputString.toLowerCase().trim();
  const stringArray = lowerCasedString.split(" ");
  const correctOutput = [];
  let currentIndex = 0;
  for (const str of stringArray) {
    let newString = str;
    const underScoreIndex = str.indexOf("_");
    const capitalisedString =
      newString.substring(0, underScoreIndex) +
      newString[underScoreIndex + 1].toUpperCase() +
      newString.substring(underScoreIndex + 2);
    // console.log(capitalisedString);
    const removedUnderScoreString = capitalisedString.replace("_", "");
    const finalOutputString =
      removedUnderScoreString.padEnd(20) + "✅".repeat(currentIndex + 1);
    correctOutput.push(finalOutputString);
    currentIndex++;
  }

  const joinedString = correctOutput.join("\n");
  console.log(joinedString);
};

convertToCamelCase(rawString);

// Jonas Solution Below with the question

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
