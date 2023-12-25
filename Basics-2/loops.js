// For Loop

for (let i = 1; i <= 5; i++) {
  console.log(`Excercise ${i}`);
}

const array = ["6351414924", "9824466500"];

const newArray = []; // Empty Array
for (let index = 0; index < array.length; index++) {
  newArray[index] = array[index];
}

// Iteration over an array adn printing its value

for (let arrIndex = 0; arrIndex <= array.length - 1; arrIndex++) {
  console.log(`array[${arrIndex}] =>  `, array[arrIndex]);
}

// Looping Backwards through an array

for (let arrIndex1 = array.length - 1; arrIndex1 >= 0; arrIndex1--) {
  console.log(`array[${arrIndex1}] =>  `, array[arrIndex1]);
}

// looop inside loop

for (let i = 1; i <= 5; i++) {
  console.log(`Execercise - ${i}`);
  for (let j = 1; j <= 5; j++) {
    console.log(`-----Excercise Repetitation Set : ${j}`);
  }
}

console.log("New Array content", newArray);

// while loop

let dice = Math.trunc(Math.random() * 6 + 1);

if (dice === 6) {
  console.log(`You rolled ${dice} on your first roll`);
}

while (dice !== 6) {
  console.log(`You rolled a  ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);

  if (dice === 6) {
    console.log(`Loop is over, you rolled the ${dice} dice`);
  }
}
